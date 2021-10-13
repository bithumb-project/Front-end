import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Wrapper = styled.div`
  border: 1px solid ${Theme.palette.secondary.main};
  min-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${Theme.palette.secondary.main};
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  line-height: 48px;
  font-size: 0.875rem;
  padding-left: 16px;
  padding-right: 16px;
`;

export const InnerWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px;
  width: 150px;
  margin: 0 auto;
  cursor: pointer;
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid ${Theme.palette.secondary.light};
`;

export const Text = styled.div`
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 7px;
`;
