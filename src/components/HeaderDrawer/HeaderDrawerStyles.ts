import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Menu, MenuItem } from '@mui/material';

export const ButtonStyle = styled(Button)`
  width: 100%;
  height: 34px;
  color: #ffffff;
  border-radius: 0;
  &:hover {
    background-color: #104b85;
  }
`;

export const MenuStyle = styled(Menu)`
  & .MuiList-root {
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 0px;
    display: flex;
    flex-direction: row;
  }
`;

export const MenuItemStyle = styled(MenuItem)`
  font-size: 12px;
  justify-content: center;

  &:not(:last-child) {
    border-bottom: 1px solid #1976d1;
  }
  &:hover {
    color: white;
    background-color: #1976d1;
  }
`;
