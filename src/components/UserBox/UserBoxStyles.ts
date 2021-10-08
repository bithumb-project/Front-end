import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
`;

export const UserEmail = styled.span`
  font-size: 1rem;
  margin: 0 1em;
`;

export const LogoutBtn = styled(Button)`
`;