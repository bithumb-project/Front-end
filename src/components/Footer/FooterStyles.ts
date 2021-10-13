import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Wrapper = styled.div`
  border-top: 2px solid ${Theme.palette.secondary.main};
  margin-right: 10px;
  margin: 30px 10px 30px 0px;
  height: 86px;
`;

export const List = styled.ul`
  padding: 15px 0;
  display: flex;
  font-size: small;
  border-bottom: 1px solid ${Theme.palette.secondary.light}; ;
`;

export const ListItem = styled.li`
  padding: 0 10px 0 0;
  cursor: pointer;

  &:hover {
    color: ${Theme.palette.primary.main};
  }
`;

export const SiteInfo = styled.div`
  margin-top: 15px;
  color: ${Theme.palette.secondary.main};
  font-size: x-small;
`;

export const Item = styled.div`
  margin: 5px 0;
`;
