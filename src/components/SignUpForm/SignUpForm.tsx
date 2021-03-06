import React, { useRef, useState } from 'react';
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
import { BigAvatar, PersonAvatar, AddIconSmall, ImageUpload, MoveToLogin } from './SignUpFormStyles';
import Link from 'next/link';
import { useRouter } from 'next/router'
import useAuth from '../../features/auth/authHooks';
import { UserInputData } from '../../types/authType';

const SignUpForm: React.FC = (props) => {
  const [userInputData, setUserInputData] = useState<UserInputData>({
    nickname: '',
    email: '',
    password: '',
    comfirmPassword: '',
    profile:'',
  });
  const inputFileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { signUp } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(handleComparePassword()) return;
    const { nickname, email, password } = userInputData;
    if(nickname === '' || email === '' || password === '') return;
    signUp({ nickname, email, password });
    router.push('/login');
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
          ????????????
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
                label="?????????"
                autoFocus
                onChange={handleInputOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="?????????"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="?????????(example@gmail.com)"
                onChange={handleInputOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="????????????"
                type="password"
                id="password"
                autoComplete="new-password"
                placeholder="??????, ??????, ???????????? ?????? 8~15???"
                onChange={handleInputOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="comfirmPassword"
                label="???????????? ??????"
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
            ?????? ????????????
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login">
                <MoveToLogin>?????? ????????? ???????????????? ?????????</MoveToLogin>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUpForm;