import styled, { css } from 'styled-components';
import { Tab, Tabs } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  max-width: 1440px;
`;

export const TabsStyle = styled(Tabs)`
  margin-bottom: 10px;

  & > div > div > .MuiButtonBase-root {
    min-height: 0;
    padding: 5px;
    font-size: 10px;
  }
  & .MuiSvgIcon-root {
    font-size: 14px;
  }
`;

export const TabStyle = styled(Tab)`
  padding: 0;
  margin: 0;

  & .MuiTab-root {
    min-height: 20px;
  }
`;
