import { schema } from 'normalizr';

const vehicle = new schema.Entity('vehicles', {}, { idAttribute: 'vin' });

export const vehicleListSchema = [vehicle];
