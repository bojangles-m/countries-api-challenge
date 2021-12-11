import axios from 'axios';
import { countries } from './endpoints';

type Name = {
  common: string;
  official: string;
};
export type Country = {
  name: Name;
  capital: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  region: string;
};
export type Countries = Country[];

export function fetchAllCountries(): Promise<Countries> {
  return axios.get(countries).then(({ data }) => {
    if (data.status) {
      return Promise.reject(new Error(data.message));
    } else {
      return data;
    }
  });
}
