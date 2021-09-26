import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  AppBarStyle,
  BoxStyle,
  LayoutStyle,
  ButtonStyle,
  MenuItemStyle,
  MenuStyle,
} from './HeaderStyles';

const Headers = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BoxStyle>
      <AppBarStyle>
        <LayoutStyle>
          <ButtonStyle>
            <HomeIcon />
          </ButtonStyle>
          <ButtonStyle onClick={handleClick}>코인판</ButtonStyle>
          <MenuStyle anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItemStyle onClick={handleClose}>Profile</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>My account</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>Logout</MenuItemStyle>
          </MenuStyle>
          <ButtonStyle onClick={handleClick}>선물/마진</ButtonStyle>
          <ButtonStyle onClick={handleClick}>커뮤니티</ButtonStyle>
          <ButtonStyle onClick={handleClick}>코인포럼</ButtonStyle>
          <ButtonStyle onClick={handleClick}>거래소포럼</ButtonStyle>
          <ButtonStyle onClick={handleClick}>갤러리</ButtonStyle>
          <ButtonStyle onClick={handleClick}>거래소/차트</ButtonStyle>
          <ButtonStyle onClick={handleClick}>공지</ButtonStyle>
          <ButtonStyle>
            <MenuIcon />
          </ButtonStyle>
        </LayoutStyle>
      </AppBarStyle>
    </BoxStyle>
  );
};

export default Headers;
