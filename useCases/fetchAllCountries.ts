import axios from 'axios';
import { countries } from './endpoints';

type Name = {
  common: string;
  official: string;
};
export type Country = {
  name: string;
  capital: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  region: string;
};
export type Countries = Country[];

export function fetchAllCountries(): Promise<Countries> {
  return axios.get(countries).then(response => {
    console.log(response.data);
    return response.data;
  });
}
