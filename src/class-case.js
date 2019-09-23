import { camelCase } from './camel-case';
import { capitalize } from './capitalize';

export const classCase = (str) => capitalize(camelCase(str));
