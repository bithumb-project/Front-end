import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BigAvatar, PersonAvatar, AddIconSmall, ImageUpload} from './SignUpFormStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface UserInputData {
  name: string;
  email: string;
  password: string;
  comfirmPassword: string;
  profileImage: string;
}
const theme = createTheme();

const SignUpForm: React.FC = (props) => {
  const [userInputData, setUserInputData] = useState<UserInputData>({
    name: '',
    email: '',
    password: '',
    comfirmPassword: '',
    profileImage:'',
  });
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const handleFileOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setUserInputData({
        ...userInputData,
        profileImage: URL.createObjectURL(newImage)
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
            Sign up
          </Typography>
          <BigAvatar>
            <input
            ref={inputFileRef}
            hidden
            type="file"
            accept="image/*"
            onChange={handleFileOnChange}
            />
            {userInputData.profileImage ? <ImageUpload src={userInputData.profileImage} onClick={handleImageClick} /> : <PersonAvatar onClick={(e)=>{handleImageClick(e)}}/>}
            <AddIconSmall />
          </BigAvatar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={handleInputOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleInputOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInputOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="comfirmPassword"
                  label="Comfirm Password"
                  type="password"
                  id="password"
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
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