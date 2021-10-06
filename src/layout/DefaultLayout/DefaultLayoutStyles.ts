import styled from 'styled-components';

export const SectionWrapper = styled.div`
  min-width: 1440px;
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
  border: 1px solid red;
  width: 828px;
  margin-right: 10px;
`;

export const SideSection = styled.div`
  border: 1px solid blue;
  width: 200px;
  display: grid;
  grid-gap: 10px;
`;
