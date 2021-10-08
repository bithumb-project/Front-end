import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { User } from '../../store/modules/userSlice';
import { useDispatch } from 'react-redux';
import { login } from '../../store/modules/userSlice';
import { MoveToSignUp } from './LoginFormStyles';
import Link from 'next/link';
import { useRouter } from 'next/router'

const theme = createTheme();

const LoginForm:React.FC = () => {
  const [loginData, setLoginData] = useState<User>({
    email: '',
    password: '',
  })
  const dispatch = useDispatch();
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(loginData.email === '' || loginData.password === '') return;
    const { email, password } = loginData;
    dispatch(
      login({
        email,
        password
      })
    );
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider> 
  );
}

export default LoginForm;