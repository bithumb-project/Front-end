import styled from 'styled-components';

import { List, ListItemButton, ListItemText } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import Theme from './Theme';

export const ListStyle = styled(List)`
  border: 1px solid ${Theme.palette.secondary.main};
  width: 400px;
`;

export const ListSubHeaderStyle = styled(ListSubheader)`
  border-bottom: 1px solid ${Theme.palette.secondary.light};
  font-weight: bold;
  background: #f9f9f9;
`;

export const ListItemButtonStyle = styled(ListItemButton)``;

export const ListItemTextStyle = styled(ListItemText)`
  & .MuiTypography-root-bWuLxc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
