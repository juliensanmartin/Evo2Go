import { forEach, chunk, toString, flatten } from 'lodash'

export const getModoCars = () => {
  return fetch('https://bookit.modo.coop/api/fleet/cars')
    .then(response => response.json())
    .then(responseJson => {
      return getModoAvailableCars(filter(responseJson))
    })
}

const filter = (response) => {
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
	const carIdsPack = chunk(carIds, 20)
	const promises = []
	const result = []
	forEach(carIdsPack, pack => {
		promises.push(getModoCarsByPack(pack))
	})

	Promise.all(promises)
		.then((data) => {
			result.push(data)
		})

	return flatten(result)
}

const getModoCarsByPack = (carIds) => {
  const request = `https://bookit.modo.coop/api/availability?cars=${toString(carIds)}`
	return fetch(request)
		.then(response => response.json())
		.then(response => {
			 return response.Data
		})
}
