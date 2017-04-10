import { car2GoConfig } from './config';

const params = `?${car2GoConfig.loc}&${car2GoConfig.oauthConsumerKey}&${car2GoConfig.format}`;

export const getAvailableVehicleCar2Go = () => {
  return fetch(`${car2GoConfig.url}/vehicles${params}`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.placemarks;
    })
    .catch((error) => {
      console.error(error);
    });
};
