import axios from 'axios';
import { countriesMin } from './endpoints';

type Country = {
  alpha3Code: string;
  name: string;
};

export type Countries = Map<string, string>;

export function fetchAndMapAllCountries(): Promise<Countries> {
  return axios.get(countriesMin).then(response => {
    const countriesMap = new Map();
    response.data.forEach((country: Country) => {
      countriesMap.set(country.alpha3Code, country.name);
    });
    return Promise.resolve(countriesMap);
  });
}
