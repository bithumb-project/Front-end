import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { signUpAction, loginAction, logoutAction } from './userSlice';
import { User } from './userSlice';

export default function useUser() {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const signUp = useCallback((data: User) => {
    dispatch(signUpAction(data));
  }, []);

  const login = useCallback((data: User) => {
    dispatch(loginAction(data));
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return { isLoggedIn, signUp, login, logout };
}