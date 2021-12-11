import axios from 'axios';
import { countriesMin } from './endpoints';

type Country = {
  alpha3Code: string;
  name: string;
};

export type Countries = Map<string, string>;

export async function fetchAndMapAllCountries(): Promise<Countries> {
  const countriesMap = new Map();
  const response = await axios.get(countriesMin);
  response.data.forEach((country: Country) => {
    countriesMap.set(country.alpha3Code, country.name);
  });
  return countriesMap;
}
