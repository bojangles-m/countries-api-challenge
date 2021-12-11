import axios from 'axios';
import { countriesByName } from './endpoints';
import { Countries } from './fetchAllCountries';

export function fetchAllCountries(name: string): Promise<Countries> {
  return axios.get(countriesByName(name)).then(({ data }) => {
    if (data.status) {
      return Promise.reject(new Error(`No country with the name "${name}"`));
    } else {
      return data;
    }
  });
}
