import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAndMapAllCountries } from '../useCases/fetchAndMapAllCountries';
import { fetchAllCountries, Countries } from '../useCases/fetchAllCountries';

export interface IDataProviderProps {
  children: React.ReactNode;
}

export enum Status {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  LOADED = 'LOADED',
}

type IDataProviderContext = {
  status: Status;
  mappedCountries: Map<string, string>;
  allCountries: undefined | Countries;
};

const DataProviderContext = createContext<IDataProviderContext | null>(null);

export default function useDataProvider() {
  const context = useContext(DataProviderContext);
  if (!context) {
    throw new Error('useDataProvider must be used within the Pages');
  }
  return context;
}

function DataProvider({ children }: IDataProviderProps) {
  const [state, setState] = useState<IDataProviderContext>({
    status: Status.LOADING,
    mappedCountries: new Map(),
    allCountries: undefined,
  });

  useEffect(() => {
    (async (): Promise<void> => {
      const resultMappedCountries = await fetchAndMapAllCountries();
      const resultAllCountries = await fetchAllCountries();

      setState({
        status: Status.LOADED,
        mappedCountries: resultMappedCountries,
        allCountries: resultAllCountries,
      });
    })();
  }, []);

  return (
    <DataProviderContext.Provider value={state}>
      {children}
    </DataProviderContext.Provider>
  );
}

export { useDataProvider, DataProvider };
