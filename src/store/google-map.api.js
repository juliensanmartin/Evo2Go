const googleMapConfig = {
	key: 'AIzaSyAokG_foEe_P5uO2jxtVfEadnAjzHP6fsA',
	url: 'http://maps.googleapis.com/maps/api/distancematrix/json'
}

export const getTimeAndDistance = (origin, destination) => {
  const url = `${googleMapConfig.url}?origins=${origin.lat},${origin.lon}&destinations=${destination.lat},${destination.lon}&key=${googleMapConfig.key}&mode=walking`
  return fetch(url)
    .then(response => response.rows.elements[0])
    .catch(error => {
      console.error(error)
    })
}
