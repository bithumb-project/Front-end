import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BigAvatar, PersonAvatar, AddIconSmall, ImageUpload } from './SignUpFormStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/modules/userSlice';

interface UserInputData {
  nickname: string;
  email: string;
  password: string;
  comfirmPassword: string;
  profile: string;
}
const theme = createTheme();

const SignUpForm: React.FC = (props) => {
  const [userInputData, setUserInputData] = useState<UserInputData>({
    nickname: '',
    email: '',
    password: '',
    comfirmPassword: '',
    profile:'',
  });
  const inputFileRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(handleComparePassword()) return;
    const { nickname, email, password } = userInputData;
    dispatch(
      signUp({
        nickname,
        email,
        password,
      })
    );
  };

  const handleFileOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setUserInputData({
        ...userInputData,
        profile: URL.createObjectURL(newImage)
      })
    }
  };

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setUserInputData({
      ...userInputData,
      [name]: value
    })
  };

  const handleImageClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    inputFileRef.current?.click();
  };

  const handleComparePassword = () => {
    return userInputData.password !== userInputData.comfirmPassword ? true : false;
  };

  return (
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
            회원가입
          </Typography>
          <BigAvatar>
            <input
            ref={inputFileRef}
            hidden
            type="file"
            accept="image/*"
            onChange={handleFileOnChange}
            />
            {userInputData.profile ? <ImageUpload src={userInputData.profile} onClick={handleImageClick} /> : <PersonAvatar onClick={(e)=>{handleImageClick(e)}}/>}
            <AddIconSmall />
          </BigAvatar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="nickname"
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임"
                  autoFocus
                  onChange={handleInputOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="이메일(example@gmail.com)"
                  onChange={handleInputOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="영문, 숫자, 특수문자 조합 8~15자"
                  onChange={handleInputOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="comfirmPassword"
                  label="비밀번호 확인"
                  type="password"
                  id="comfirmPassword"
                  autoComplete="new-password"
                  onChange={handleInputOnChange}
                  error={handleComparePassword()}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              계정 생성하기
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  이미 계정이 있으신가요? 로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpForm;