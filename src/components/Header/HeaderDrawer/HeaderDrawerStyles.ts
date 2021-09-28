import styled from 'styled-components';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Menu, MenuItem } from '@mui/material';

export const AllMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DrawerStyle = styled(Drawer)`
  &.MuiPaper-root {
  }
`;

export const ButtonStyle = styled(Button)`
  width: 100%;
  height: 34px;
  color: #ffffff;
  border-radius: 0;
  &:hover {
    /* color: #fddb27; */
    background-color: #104b85;
  }
`;

export const MenuStyle = styled(Menu)`
  & .coinforumMenu {
    color: red;
  }
  & .MuiMenu-paper {
    top: 103px;
  }
  & .MuiPaper-root {
    border-radius: 0px;
    top: 103px;
  }
  & .MuiList-root {
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 0px;
    display: flex;
    flex-direction: row;
  }
`;

export const MenuItemStyle = styled(MenuItem)`
  font-size: 13px;
  justify-content: center;

  &:not(:last-child) {
    border-bottom: 1px solid #1976d1;
  }
  &:hover {
    /* color: #fddb27; */
    color: white;
    background-color: #1976d1;
  }
`;
