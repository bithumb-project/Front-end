import { InputBase } from '@mui/material';
import styled from 'styled-components';
import Theme from '../Theme';

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const StyledInputBase = styled(InputBase)`
  border-bottom: 1px solid ${Theme.palette.secondary.light};

  & .MuiInputBase-input {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div``;
