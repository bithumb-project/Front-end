import { Button } from '@mui/material';
import styled from 'styled-components';

import { List, ListItemButton, ListItemText } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import Theme from '../../styles/Theme';

export const SectionWrapper = styled.div`
  min-width: 1440px;
  max-height: 476px;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const InfoWrapper = styled.div`
  & > div {
    margin-bottom: 10px;
  }
`;

export const InfoSection = styled.div`
  width: 828px;
  margin-right: 10px;
`;

export const SideSection = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 200px;
`;

export const LoginButton = styled(Button)`
  height: 44px;
`;

export const ListStyle = styled(List)`
  border: 1px solid ${Theme.palette.secondary.main};
`;

export const ListSubHeaderStyle = styled(ListSubheader)`
  border-bottom: 1px solid ${Theme.palette.secondary.light};
  font-weight: bold;
  background: #f9f9f9;
`;

export const ListItemButtonStyle = styled(ListItemButton)`
  max-width: 198px;
`;

export const ListItemTextStyle = styled(ListItemText)`
  & .MuiTypography-root-bWuLxc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
