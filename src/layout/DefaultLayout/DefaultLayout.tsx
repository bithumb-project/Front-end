import { useState, MouseEvent } from 'react';
import Banners from '../../components/Banners/Banners';
import Headers from '../../components/Headers/Headers';
import TabMenu from '../../components/TabMenu/TabMenu';
import Grid from '@mui/material/Grid';
import {
  InfoWrapper,
  SectionWrapper,
  InfoSection,
  SideSection,
} from './DefaultLayoutStyles';
import { Button, List, ListItemButton, ListItemText } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import Link from 'next/link';

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
          <Link href='/login'>
            <Button variant='outlined' fullWidth>
              로그인
            </Button>
          </Link>
          <List sx={{ border: '1px solid #929292' }}>
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
            sx={{ border: '1px solid #929292' }}
            subheader={
              <ListSubheader
                sx={{
                  borderBottom: '1px solid #dadada',
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
            sx={{ border: '1px solid #929292' }}
            subheader={
              <ListSubheader
                sx={{
                  borderBottom: '1px solid #dadada',
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
