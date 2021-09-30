import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../store/modules/user';
// const headers = {
//   'Content-Type': 'application/json', // 인증 필요없을땐 이것만
//   'Authorization': 'JWT fefege...' 
// //인증 필요할땐  Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
// }

// axios.post(Helper.getUserAPI(), data, {
//     headers: headers
//   })
//   .then((response) => {
//     dispatch({
//       type: FOUND_USER,
//       data: response.data[0]
//     })
//   })
//   .catch((error) => {
//     dispatch({
//       type: ERROR_FINDING_USER
//     })
//   })
// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.Authorization = `Bearer ${token}`

// 회원가입
export const signUp = createAsyncThunk(
  'user/member',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await axios.post('/member', user);
      if (response.data) {
        // localStorage 에 유저 데이터, 토큰 저장
      }
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