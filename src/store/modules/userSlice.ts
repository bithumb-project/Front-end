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
      alert(`${action.payload.nickname} 님 회원가입 완료`);
    },
    loginAction: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user.email = action.payload.email;
      alert(`${action.payload.email} 님 로그인 완료`);
    },
    logoutAction: (state) => {
      state.isLoggedIn = false;
    },
  }
});

export const { signUpAction, loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;