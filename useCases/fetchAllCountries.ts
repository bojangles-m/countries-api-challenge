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

export function fetchAllCountries(): Promise<Countries> {
  return axios.get(countries).then(response => {
    console.log(response.data);
    return response.data;
  });
}
