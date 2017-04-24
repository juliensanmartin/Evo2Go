const car2GoConfig = {
	key: 'TransitApp',
	url: 'http://www.car2go.com/api/v2.1',
  format: 'json',
  loc: 'vancouver',
};

const params = `?loc=${car2GoConfig.loc}&oauth_consumer_key=${car2GoConfig.key}&format=${car2GoConfig.format}`;

// "placemarks": [
//     {
//       "address": "1290 Cartwright St,surface lot.6 spots w/overflow",
//       "coordinates": [
//         -123.13282,
//         49.26948,
//         0
//       ],
//       "engineType": "CE",
//       "exterior": "GOOD",
//       "fuel": 71,
//       "interior": "GOOD",
//       "name": "DA395W",
//       "smartPhoneRequired": true,
//       "vin": "WMEFJ5DAXGK125644"
//     },
//   ]
export const getAvailableVehicleCar2Go = () => {
  return fetch(`${car2GoConfig.url}/vehicles${params}`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.placemarks;
    })
    .catch(error => {
      console.error(error);
    });
};
