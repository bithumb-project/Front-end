import { useState, MouseEvent } from 'react';
import Banners from '../../components/Banners/Banners';
import Headers from '../../components/Headers/Headers';
import TabMenu from '../../components/TabMenu/TabMenu';

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

type props = { children: React.ReactNode };

const DefaultLayout: React.FC<props> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

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
          <InfoSection>
            <h2>실시간 테이블 자리</h2>
          </InfoSection>
          <InfoSection>
            <div>{children}</div>
          </InfoSection>
        </InfoWrapper>
        <SideSection>
          <LoginButton variant='outlined' fullWidth>
            로그인
          </LoginButton>
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
                코인뉴스
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
        </SideSection>
      </SectionWrapper>
    </>
  );
};

export default DefaultLayout;
