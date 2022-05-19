import { useCallback, useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, logout as authLogout } from '../../../api/service/auth/auth';
import { fetchUser } from '../../../api/service/users/users';
import { AuthContext, AuthDispatchContext } from '../AuthContext';

/**
 * Хук для получения id организации.
 */
const useAuth = () => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useContext(AuthDispatchContext);
  const [user, loading] = useAuthState(getAuth());

  const loadCurrentUser = useCallback(async () => {
    if (user) {
      const resp = await fetchUser(user.uid);
      if (resp) {
        dispatch({ type: 'SET_USER', payload: resp });
      }
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (loading) return;
    loadCurrentUser();
  }, [user, loading, loadCurrentUser]);

  const logout = async () => {
    await authLogout();
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = async (likes: string[]) => {
    if (currentUser) {
      currentUser.likes = likes;

      dispatch({ type: 'UPDATE_USER_LIKES', payload: currentUser });
    }
  };

  return { currentUser, updateUser, logout };
};

export default useAuth;
