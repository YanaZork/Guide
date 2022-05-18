import { useContext } from 'react';
import { FilterContext, FilterDispatchContext } from '../FilterContext';

const useFilter = () => {
  const { by: filterBy, filter: filterValue } = useContext(FilterContext);
  const dispatch = useContext(FilterDispatchContext);

  const setFilterBy = (newBy: string) => {
    dispatch({ type: 'SET_FILTER_BY', payload: newBy });
  };

  const setFilterValue = (value: string) => {
    dispatch({ type: 'SET_FILTER_VALUE', payload: value });
  };

  return { filterBy, filterValue, setFilterBy, setFilterValue };
};

export default useFilter;
