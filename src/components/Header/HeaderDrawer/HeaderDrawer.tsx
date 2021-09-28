import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import {
  DrawerStyle,
  ButtonStyle,
  MenuItemStyle,
  MenuStyle,
} from './HeaderDrawerStyles';

const HeaderDrawer = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonStyle onClick={(e) => handleClick(e)}>
        <MenuIcon />
      </ButtonStyle>
      <MenuStyle anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div>
          <MenuItemStyle onClick={handleClose}>코인판</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>코인정보</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>코인뉴스</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>채굴정보</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>채굴게시판</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>채굴기장터</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>에어드랍</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>차트분석</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>출석체크</MenuItemStyle>
        </div>
        <div>
          <MenuItemStyle onClick={handleClose}>선물/마진</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>선물/마진 정보</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>선물/마진 게시판</MenuItemStyle>
        </div>
        <div>
          <MenuItemStyle onClick={handleClose}>커뮤니티</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>자유게시판</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>손익인증 게시판</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>질문/답변</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>유머/감동</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>HOT게시물</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>추천게시물</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>가입인사</MenuItemStyle>
        </div>
        <div>
          <MenuItemStyle onClick={handleClose}>코인포럼</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>전체글</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>HOT게시물</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>리플</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>이오스</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>클레이튼</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>도지코인</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>에이다</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>바이프로스트</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>비트코인</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>비트코인캐시</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>비캐에이비씨</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>비트코인에스브이</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>비트코인골드</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>이더리움</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>이더리움클래식</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>라이트코인</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>스텔라루멘</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>퀀텀</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>트론</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>SNT</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>시아코인</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>버지</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>아이콘</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>오미세고</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>펀디엑스</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>카이버네트워크</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>질리카</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>CNN</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>캡</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>ICO/IEO</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>메이저코인</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>알트코인</MenuItemStyle>
        </div>
        <div>
          <MenuItemStyle onClick={handleClose}>거래소포럼</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>전체글</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>빗썸</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>업비트</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>코인원</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>코빗</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>에이프로빗</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>코인빗</MenuItemStyle>
        </div>
        <div>
          <MenuItemStyle onClick={handleClose}>갤러리</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>폰카캘러리</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>자유갤러리</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>연예인갤러리</MenuItemStyle>
        </div>
        <div>
          <MenuItemStyle onClick={handleClose}>거래소/차트</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>국내거래소</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>해외거래소</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>차트/시세</MenuItemStyle>
        </div>
        <div>
          <MenuItemStyle onClick={handleClose}>공지</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>공지사항</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>문의게시판</MenuItemStyle>
          <MenuItemStyle onClick={handleClose}>제휴문의</MenuItemStyle>
        </div>
      </MenuStyle>
    </>
  );
};

export default HeaderDrawer;
