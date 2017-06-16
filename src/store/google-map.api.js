const googleMapConfig = {
	key: 'AIzaSyAokG_foEe_P5uO2jxtVfEadnAjzHP6fsA',
	url: 'https://maps.googleapis.com/maps/api/distancematrix/json'
}

export const getTimeAndDistance = (origin, destination) => {
  const url = `${googleMapConfig.url}?origins=${origin.latitude},${origin.longitude}&destinations=${destination.latitude},${destination.longitude}&key=${googleMapConfig.key}&mode=walking`
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}
