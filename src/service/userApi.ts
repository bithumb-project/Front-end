import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../store/modules/userSlice';

// 회원가입
export const signUp = createAsyncThunk(
  'user/member',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await axios.post('/member', user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 로그인
export const login = createAsyncThunk(
  'user/login',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await axios.post('/login', user);
      // localStorage 에 토큰, 유저 정보 저장하기
      // localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 로그인 유지
export const loadUser = createAsyncThunk(
  'user/load',
  async () => {
    if (localStorage['token']){
      const user = {
        // id: localStorage.getItem('id'),
        // nickname: localStorage.getItem('nickname'),
      }
      return user;
    }
  }
);

// 로그아웃
export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    // localStorage.removeItem('token');
  }
);