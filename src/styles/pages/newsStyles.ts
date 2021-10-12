import styled from 'styled-components';
import { Container } from '@mui/material';

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const NewsContainer = styled(Container)`
  @media screen and (min-width: 900px) {
    max-width: 780px;
  }
`;