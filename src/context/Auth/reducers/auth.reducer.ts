import AuthStateModel from '../../../types/AuthState.model';
import { AuthAction } from './auth.actions';

const authReducer = (state: AuthStateModel, action: AuthAction): AuthStateModel => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'LOGOUT':
      return { currentUser: undefined };
    default:
      throw new Error(`UNKNOWN REDUCER ACTION: ${action}`);
  }
};

export default authReducer;
