import React, { createContext, FunctionComponent, Dispatch, useReducer } from 'react';
import AuthStateModel from '../../types/AuthState.model';
import { AuthAction } from './reducers/auth.actions';
import authReducer from './reducers/auth.reducer';

const initState: AuthStateModel = {};

const AuthContext = createContext(initState);
const AuthDispatchContext = createContext<Dispatch<AuthAction>>(() => {});

const AuthProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export { AuthContext, AuthDispatchContext, AuthProvider };
