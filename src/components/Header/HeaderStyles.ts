import styled from 'styled-components';
import { AppBar, makeStyles } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const BoxStyle = styled(Box)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const AppBarStyle = styled(AppBar)`
  position: static;
  max-width: 1038px;
  height: 34px;
  display: flex;
  justify-content: center;
  top: 103px;
  &.MuiPaper-root {
    box-shadow: none;
  }
`;

export const LayoutStyle = styled(Toolbar)`
  padding-left: 0px;
  padding-right: 0px;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    min-height: 34px;
    cursor: pointer;
    &:hover {
      /* color: #fddb27; */
      background-color: #104b85;
    }
    &.MuiPaper-root {
      top: 103px;
    }
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
  &.MuiMenu-paper {
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
