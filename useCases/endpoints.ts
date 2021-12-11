// export const countries = `https://restcountries.com/v3.1/all`;
const API_ENDPOINT = 'https://restcountries.com/v3.1';

export const countries = `${API_ENDPOINT}/all?fields=name,capital,population,flags,region`;

export const countriesByName = (name: string) =>
  `${API_ENDPOINT}/name/${name}?fields=name,capital,population,flags,region`;

export const country = (name: string) =>
  `${API_ENDPOINT}/name/${name}?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag`;
// `https://restcountries.com/v2/name/${name}`;
