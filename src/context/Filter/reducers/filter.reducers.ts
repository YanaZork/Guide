import FilterStateModel from '../../../types/FilterState.model';
import { FilterAction } from './filter.actions';

const filterReducer = (state: FilterStateModel, action: FilterAction): FilterStateModel => {
    switch (action.type) {
        case 'SET_FILTER_BY':
            return {
                ...state,
                by: action.payload,
            };
        case 'SET_FILTER_VALUE':
            console.log('SET_FILTER_VALUE', action.payload)
            return {
                ...state,
                filter: action.payload,
            };

        default:
            throw new Error(`UNKNOWN REDUCER ACTION: ${action}`);
    }
};

export default filterReducer;
