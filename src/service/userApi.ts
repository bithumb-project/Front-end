import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../store/modules/userSlice';

// axios.defaults.baseURL = 'http://localhost:3000';

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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);