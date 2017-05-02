import { schema, normalize } from 'normalizr';

const car2GoVehicle = new schema.Entity('vehicles', {}, { idAttribute: 'vin' });
const car2goVehicleListSchema = [car2GoVehicle];
export const car2goVehicleNormalizer = result => normalize(result, car2goVehicleListSchema);


const evoVehicle = new schema.Entity('vehicles', {}, { idAttribute: 'Id' });
const evoVehicleListSchema = [evoVehicle];
export const evoVehicleNormalizer = result => normalize(result, evoVehicleListSchema);
