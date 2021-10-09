import { useCallback } from 'react';
import { signUpAction, loginAction, logoutAction, loadUserAction } from './authSlice';
import { User } from '../../types/authType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export default function useAuth() {
  const { user, isLoggedIn } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const signUp = useCallback((data: User) => {
    dispatch(signUpAction(data));
  }, []);

  const login = useCallback((data: User) => {
    dispatch(loginAction(data));
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  const loadUser = useCallback((data: any) => {
    dispatch(loadUserAction(data));
  }, []);

  return { user, isLoggedIn, signUp, login, logout, loadUser };
}