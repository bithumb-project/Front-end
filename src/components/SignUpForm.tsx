import React, { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

const theme = createTheme();

const SignUpForm: React.FC = (props) => {
  const [image, setImage] = useState<string>('');
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleFileOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  const handleImageClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    inputFileRef.current?.click();
  };

  const BigAvatar = styled(Avatar)`
    && {
      width: 120px;
      height: 120px;
      margin-top: 24px;
      position: relative;
      overflow: visible;
    }
  `;

  const PersonAvatar = styled(PersonIcon)`
    && {
      font-size: 70px;
    }
  `;

  const AddIconSmall = styled(AddIcon)`
    && {
      color: white;
      background-color: gray;
      position: absolute;
      border-radius: 50%;
      transform: translate(200%, 150%);
    }
  `;

  const ImageUpload = styled.img`
    width : 100%;
    height: 100%;
    border-radius: 50%;
  `;

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
            {image ? <ImageUpload src={image} onClick={handleImageClick} /> : <PersonAvatar onClick={(e)=>{handleImageClick(e)}}/>}
            <AddIconSmall />
          </BigAvatar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="comfirm-password"
                  label="Comfirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
  )};

export default SignUpForm;