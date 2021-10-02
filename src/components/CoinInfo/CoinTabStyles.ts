import styled from 'styled-components';
import Box from '@mui/material/Box';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const CoinTabContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const CoinBox = styled(Box)`
  & .MuiButtonBase-root {
    min-width: 60px;
  }
`;

export const CoinCollapse = styled.div`
`;

export const ArrowButton = styled.button`
  border: 0;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const ArrowButtonIcon = styled(ArrowDropUpIcon)`
  &.view {
    transform: rotate(180deg);
  }
`;