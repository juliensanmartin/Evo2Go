const car2GoConfig = {
	key: 'TransitApp',
	url: 'https://www.car2go.com/api/v2.1',
  format: 'json',
  loc: 'vancouver',
};

const params = `?loc=${car2GoConfig.loc}&oauth_consumer_key=${car2GoConfig.key}&format=${car2GoConfig.format}`;

export const getAvailableVehicleCar2Go = () => {
  return fetch(`${car2GoConfig.url}/vehicles${params}`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.placemarks;
    })
    // .catch(error => {
    //   console.error(error);
    // });
};
