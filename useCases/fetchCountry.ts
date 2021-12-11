import axios from 'axios';
import { Country, CountryProps, Currency } from './types';
import { country } from './endpoints';

function initialize({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
  flag,
}: CountryProps): Country {
  return {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies: currencies
      .map((currency: Currency) => currency.name)
      .join(', '),
    languages,
    borders,
    flag,
  };
}

export function fetchCountry(name: string) {
  return axios
    .get(country(name))
    .then(response => {
      const [country] = response.data;
      console.log(country);
      return initialize(country);
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(new Error(`No country with the name "${name}"`));
    });
}
