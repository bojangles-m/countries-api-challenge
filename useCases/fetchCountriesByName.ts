import axios from 'axios';
import { countriesByName } from './endpoints';
import { Countries } from './fetchAllCountries';

export async function fetchCountriesByName(name: string): Promise<Countries> {
  try {
    const response = await axios.get(countriesByName(name));
    if (!Array.isArray(response.data)) return [];

    return response.data;
  } catch (error) {
    return [];
  }
}
