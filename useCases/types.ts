export type Modify<T, R> = Omit<T, keyof R> & R;

export type Currency = {
  code: string;
  name: string;
  symbol: string;
};
type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
export type CountryProps = {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: [];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
  flag: string;
};

export type Country = Modify<CountryProps, { currencies: string }>;
