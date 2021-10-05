import styled from 'styled-components';
import { InputBase, TextField } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1440px;
  flex-grow: 1;
  height: 72px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 245px;
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

export const SearchIconWrapper = styled.div`
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
