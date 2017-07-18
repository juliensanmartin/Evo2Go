import { forEach, chunk, toString, flatten, filter } from 'lodash'

export const getModoCars = () => {
  return fetch('https://bookit.modo.coop/api/fleet/cars')
    .then(response => response.json())
    .then(responseJson => {
      return getModoAvailableCars(getCarIds(responseJson))
    })
}

const getCarIds = (response) => {
	const carIds = []
	forEach(response.Neighbourhoods, function(value, key) {
		forEach(value.Locations, function(value, key) {
			forEach(value.Cars, function(value, key) {
			  carIds.push(key)
			})
		})
	})
	return carIds
}

export const getModoAvailableCars = (carIds) => {
	const startDate = Date.now()

	// endDate is startDate + 2 hours
	const endDate = startDate + 8230
	const carIdsPack = chunk(carIds, 20)
	const promises = []
	const result = []
	forEach(carIdsPack, pack => {
		promises.push(getModoCarsByPack(pack, startDate, endDate))
	})

	return Promise.all(promises)
		.then((data) => {
			return flatten(data)
		})
}

const getModoCarsByPack = (carIds, startDate, endDate) => {
  const request = `https://bookit.modo.coop/api/availability/${startDate}/${endDate}?cars=${toString(carIds)}`
	return fetch(request)
		.then(response => response.json())
		.then(response => {
			const availableCars = filter(response.Data, {Duration: '7200'})
			return availableCars
		})
}
