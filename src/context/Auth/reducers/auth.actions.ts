import { User } from '../../../types/User.model';

export type AuthAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' }
