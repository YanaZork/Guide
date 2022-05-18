import React, { createContext, FunctionComponent, Dispatch, useReducer } from 'react';
import FilterStateModel from '../../types/FilterState.model';
import { FilterAction } from './reducers/filter.actions';
import filterReducer from './reducers/filter.reducers';

const initState: FilterStateModel = {
    by: 'alphabetically',
    filter: ''
};

const FilterContext = createContext(initState);
const FilterDispatchContext = createContext<Dispatch<FilterAction>>(() => {});

const FilterProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initState);

  return (
    <FilterDispatchContext.Provider value={dispatch}>
      <FilterContext.Provider value={state}>{children}</FilterContext.Provider>
    </FilterDispatchContext.Provider>
  );
};

export { FilterContext, FilterDispatchContext, FilterProvider };

