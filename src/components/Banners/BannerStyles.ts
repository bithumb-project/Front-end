import styled from 'styled-components';
import { InputBase, Typography } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1440px;
  flex-grow: 1;
  height: 72px;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled(Typography)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 220px;
`;

export const Banner = styled.div`
  height: 20px;
`;

export const StyledInputBase = styled(InputBase)`
  border-bottom: 1px solid #1976d2;
  margin-left: 50px;

  & .MuiInputBase-input {
    width: 100%;
  }
`;
