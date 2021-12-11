import axios from 'axios';
import { countriesByName } from './endpoints';
import { Countries } from './fetchAllCountries';

export function fetchCountriesByName(name: string): Promise<Countries> {
  return axios
    .get(countriesByName(name))
    .then(response => response.data)
    .catch(() =>
      Promise.reject(new Error(`No country with the name "${name}"`)),
    );
}
