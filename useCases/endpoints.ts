const API_ENDPOINT = 'https://restcountries.com/v2';

// export const countries = `${API_ENDPOINT}/all`;
export const countries = `${API_ENDPOINT}/all?fields=flag,name,capital,population,region`;
export const countriesMin = `${API_ENDPOINT}/all?fields=name,alpha3Code`;

export const countriesByName = (name: string) =>
  `${API_ENDPOINT}/name/${name}?fields=flag,name,capital,population,region`;

export const country = (name: string) =>
  // `${API_ENDPOINT}/name/${name}?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag`;
  `${API_ENDPOINT}/name/${name}`;
