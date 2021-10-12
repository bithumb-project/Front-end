import { useEffect, useState, MouseEvent } from 'react';
import Banners from '../../components/Banners/Banners';
import Headers from '../../components/Headers/Headers';
import TabMenu from '../../components/TabMenu/TabMenu';
import UserBox from '../../components/UserBox/UserBox';

import {
  InfoWrapper,
  SectionWrapper,
  InfoSection,
  SideSection,
  LoginButton,
} from './DefaultLayoutStyles';
import Theme from '../../styles/Theme';

import { Button, List, ListItemButton, ListItemText } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';

import CoinInfo from '../../components/CoinInfo/CoinInfo';
import Link from 'next/link';
import useAuth from '../../features/auth/authHooks';
import { useRouter } from 'next/router';
import SideNews from '../../components/SideNews/SideNews';

type props = { children: React.ReactNode };

const DefaultLayout: React.FC<props> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

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
          <List sx={{ border: `1px solid ${Theme.palette.secondary.main}` }}>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event: any) => handleListItemClick(event, 0)}
            >
              <ListItemText primary='Inbox' />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event: any) => handleListItemClick(event, 1)}
            >
              <ListItemText primary='Inbox2' />
            </ListItemButton>
          </List>
          <List
            sx={{ border: `1px solid ${Theme.palette.secondary.main}` }}
            subheader={
              <ListSubheader
                sx={{
                  borderBottom: `1px solid ${Theme.palette.secondary.light}`,
                  fontWeight: 'bold',
                  background: '#f9f9f9 ',
                }}
              >
                공지사항
              </ListSubheader>
            }
          >
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event: any) => handleListItemClick(event, 0)}
            >
              <ListItemText primary='Inbox' />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event: any) => handleListItemClick(event, 1)}
            >
              <ListItemText primary='Inbox2' />
            </ListItemButton>
          </List>
          <SideNews />
        </SideSection>
      </SectionWrapper>
    </>
  );
};

export default DefaultLayout;
