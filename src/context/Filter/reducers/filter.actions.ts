
export type FilterAction =
    | { type: 'SET_FILTER_BY'; payload: string }
    | { type: 'SET_FILTER_VALUE', payload: string }
