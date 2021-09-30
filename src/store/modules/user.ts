import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUp, login } from '../../service/userApi';

export interface User {
  id? : number;
  nickname?: string;
  email: string;
  password?: string;
  profile?: string;
}

interface UserState {
  user: User;
  isLoggedIn: boolean;
  loginError: boolean;
  signUpError: boolean;
}

const initialState: UserState = {
  user: {
    id: 0,
    nickname: '',
    email: '',
    profile: '',
  },
  isLoggedIn: false,
  loginError: false,
  signUpError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
     // 회원가입
      .addCase(signUp.pending, (state) => {
      })
      .addCase(signUp.fulfilled, (state) => {
      })
      .addCase(signUp.rejected, (state) => {
        state.signUpError = true;
      })
      // 로그인
      .addCase(login.pending, (state) => {
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = true;
        state.user.id = action.payload.id;
        state.user.nickname = action.payload.nickname;
      })
      .addCase(login.rejected, (state) => {
        state.loginError = true;
      });
  },
});

export default userSlice;