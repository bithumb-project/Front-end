import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  password?: string;
  nickname?: string;
  profile?: string;
}

interface UserState {
  user: User;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: {
    email: '',
  },
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpAction: (state, action: PayloadAction<User>) => {
      alert(`회원가입이 완료되었습니다. 로그인 해주세요.`);
    },
    loginAction: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user.email = action.payload.email;
      localStorage.setItem('loginUser', action.payload.email);
    },
    logoutAction: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('loginUser');
    },
    loadUserAction: (state, action: any) => {
      state.isLoggedIn = true;
      state.user.email = action.payload;
    },
  }
});

export const { signUpAction, loginAction, logoutAction, loadUserAction } = userSlice.actions;
export default userSlice.reducer;