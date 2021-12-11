import axios from 'axios';
import { countries } from './endpoints';

export type Country = {
  name: string;
  capital: string;
  population: number;
  flag: string;
  region: string;
};
export type Countries = Country[];

export async function fetchAllCountries(): Promise<Countries> {
  const response = await axios.get(countries);
  return response.data;
}
