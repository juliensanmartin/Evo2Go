import { schema, arrayOf } from 'normalizr';

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

const vehicle = new schema.Entity('vehicles', { idAttribute: 'vin' });

//const roleListSchema = new schema.Array(new schema.Entity('roles'));


export const vehicles = new schema.Array(vehicle);
