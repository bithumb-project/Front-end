import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 1px solid #dae1e6;
`;

export const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em;
`;

export const UserContents = styled(Box)`
  display: flex;
  align-items: center;
  border: 1px solid #e4e8eb;
  border-width: 1px 0;
`;

export const ContentsBtn = styled(Button)`
  color: black;
  border-left: 1px solid #e4e8eb;
  padding: 1em 0;
`;

export const UserEmail = styled.span`
  font-size: 1rem;
  margin: 0 1em;
`;

export const LogoutBtn = styled(Button)`
  color: black;
`;