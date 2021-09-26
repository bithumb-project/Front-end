import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  AppBarStyle,
  BoxStyle,
  LayoutStyle,
  ButtonStyle,
  MenuItemStyle,
  MenuStyle,
} from './HeaderStyles';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Headers = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [element, setElement] = useState('');

  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    targetElement: string
  ) => {
    setAnchorEl(event.currentTarget);
    setElement(targetElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BoxStyle>
      <AppBarStyle>
        <LayoutStyle>
          <ButtonStyle>
            <HomeIcon onClick={() => router.push('/')} />
          </ButtonStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu1')}>
            코인판
          </ButtonStyle>
          <MenuStyle
            anchorEl={anchorEl}
            open={element === 'menu1' && open}
            onClose={handleClose}
          >
            <MenuItemStyle onClick={handleClose}>코인정보</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>코인뉴스</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>채굴정보</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>채굴게시판</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>채굴기장터</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>에어드랍</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>차트분석</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>출석체크</MenuItemStyle>
          </MenuStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu2')}>
            선물/마진
          </ButtonStyle>
          <MenuStyle
            anchorEl={anchorEl}
            open={element === 'menu2' && open}
            onClose={handleClose}
          >
            <MenuItemStyle onClick={handleClose}>선물/마진 정보</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>
              선물/마진 게시판
            </MenuItemStyle>
          </MenuStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu3')}>
            커뮤니티
          </ButtonStyle>
          <MenuStyle
            anchorEl={anchorEl}
            open={element === 'menu3' && open}
            onClose={handleClose}
          >
            <MenuItemStyle onClick={handleClose}>자유게시판</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>손익인증 게시판</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>질문/답변</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>유머/감동</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>HOT게시물</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>추천게시물</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>가입인사</MenuItemStyle>
          </MenuStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu4')}>
            코인포럼
          </ButtonStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu5')}>
            거래소포럼
          </ButtonStyle>
          <MenuStyle
            anchorEl={anchorEl}
            open={element === 'menu5' && open}
            onClose={handleClose}
          >
            <MenuItemStyle onClick={handleClose}>전체글</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>빗썸</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>업비트</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>코인원</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>코빗</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>에이프로빗</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>코인빗</MenuItemStyle>
          </MenuStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu6')}>
            갤러리
          </ButtonStyle>
          <MenuStyle
            anchorEl={anchorEl}
            open={element === 'menu6' && open}
            onClose={handleClose}
          >
            <MenuItemStyle onClick={handleClose}>폰카캘러리</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>자유갤러리</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>연예인갤러리</MenuItemStyle>
          </MenuStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu7')}>
            거래소/차트
          </ButtonStyle>
          <MenuStyle
            anchorEl={anchorEl}
            open={element === 'menu7' && open}
            onClose={handleClose}
          >
            <MenuItemStyle onClick={handleClose}>국내거래소</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>해외거래소</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>차트/시세</MenuItemStyle>
          </MenuStyle>
          <ButtonStyle onClick={(e) => handleClick(e, 'menu8')}>
            공지
          </ButtonStyle>
          <MenuStyle
            anchorEl={anchorEl}
            open={element === 'menu8' && open}
            onClose={handleClose}
          >
            <MenuItemStyle onClick={handleClose}>공지사항</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>문의게시판</MenuItemStyle>
            <MenuItemStyle onClick={handleClose}>제휴문의</MenuItemStyle>
          </MenuStyle>
          <ButtonStyle>
            <MenuIcon />
          </ButtonStyle>
        </LayoutStyle>
      </AppBarStyle>
    </BoxStyle>
  );
};

export default Headers;
