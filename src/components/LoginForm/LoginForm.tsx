import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
import { User } from '../../types/authType';
import { MoveToSignUp } from './LoginFormStyles';
import Link from 'next/link';
import { useRouter } from 'next/router'
import useAuth from '../../features/auth/authHooks';

const LoginForm:React.FC = () => {
  const [loginData, setLoginData] = useState<User>({
    email: '',
    password: '',
  })
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(loginData.email === '' || loginData.password === '') return;
    const { email, password } = loginData;
    login({ email, password });
    router.push('/');
  };

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    })
  };

  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="이메일(example@gmail.com)"
            onChange={handleInputOnChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputOnChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup">
                <MoveToSignUp>계정이 없으신가요? 회원가입</MoveToSignUp>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;