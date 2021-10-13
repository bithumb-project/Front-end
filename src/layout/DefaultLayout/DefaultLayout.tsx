import { useEffect, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useAuth from '../../features/auth/authHooks';

import {
  InfoWrapper,
  SectionWrapper,
  InfoSection,
  SideSection,
  LoginButton,
  ListStyle,
  ListSubHeaderStyle,
  ListItemButtonStyle,
  ListItemTextStyle,
} from './DefaultLayoutStyles';

import Banners from '../../components/Banners/Banners';
import Headers from '../../components/Headers/Headers';
import TabMenu from '../../components/TabMenu/TabMenu';
import UserBox from '../../components/UserBox/UserBox';
import CoinInfo from '../../components/CoinInfo/CoinInfo';
import SideNews from '../../components/SideNews/SideNews';
import Footer from '../../components/Footer/Footer';

type props = { children: React.ReactNode };

const hotKeywords = [
  '쿠팡플레이',
  '한국 이란',
  '한국 이란 축구 중계',
  '축구',
  'EDG',
  '10월 모의고사',
  '파이트클럽',
  '최성봉',
  '설훈',
  '최민정',
];

const DefaultLayout: React.FC<props> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { isLoggedIn, loadUser } = useAuth();
  const router = useRouter();
  const { pathname } = router;
  const authArray = ['/login', '/signup'];

  useEffect(() => {
    if (!localStorage.getItem('loginUser')) return;
    loadUser(localStorage.getItem('loginUser'));
  }, []);

  const handleListItemClick = (
    event: MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <TabMenu />
      <Banners />
      <Headers />
      <SectionWrapper>
        <InfoWrapper>
          {authArray.includes(pathname) ? null : (
            <InfoSection>
              <CoinInfo />
            </InfoSection>
          )}
          <InfoSection>
            <div>{children}</div>
          </InfoSection>
          <Footer />
        </InfoWrapper>
        <SideSection>
          {isLoggedIn ? (
            <UserBox />
          ) : (
            <Link href='/login'>
              <LoginButton variant='outlined' fullWidth>
                로그인
              </LoginButton>
            </Link>
          )}
          <ListStyle
            subheader={<ListSubHeaderStyle>공지사항</ListSubHeaderStyle>}
          >
            <ListItemButtonStyle
              selected={selectedIndex === 1}
              onClick={(event: any) => handleListItemClick(event, 1)}
            >
              <ListItemTextStyle primary='포털 인기 검색어 순위가 추가되었습니다.' />
            </ListItemButtonStyle>
            <ListItemButtonStyle
              selected={selectedIndex === 2}
              onClick={(event: any) => handleListItemClick(event, 2)}
            >
              <ListItemTextStyle primary='시세표에 플로우(FLOW)와 밀크(MLK)가 추가되었습니다.' />
            </ListItemButtonStyle>
          </ListStyle>
          <SideNews />
          <ListStyle
            subheader={
              <ListSubHeaderStyle>포털 인기 검색어</ListSubHeaderStyle>
            }
          >
            {hotKeywords.map((element, index) => (
              <ListItemButtonStyle>
                <ListItemTextStyle primary={`${index + 1}위. ${element}`} />
              </ListItemButtonStyle>
            ))}
          </ListStyle>
        </SideSection>
      </SectionWrapper>
    </>
  );
};

export default DefaultLayout;
