import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${Theme.palette.secondary.light};
  width: 100%;
`;

export const ImageWrapper = styled.div`
  padding: 20px;
  & > * {
    border: 1px solid ${Theme.palette.secondary.light};
  }
`;

export const CommentWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 10px 10px;
`;

export const InfoWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px dashed ${Theme.palette.secondary.light};
  padding: 10px 0;
  font-size: 12px;
`;
export const UserInfo = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  padding: 15px;
  font-size: 14px;
  border-left: 5px solid ${Theme.palette.secondary.light};
  border-bottom: 1px dashed ${Theme.palette.secondary.light};
  color: #404040;
`;

export const CreatedInfo = styled.li``;

export const Nickname = styled.div`
  margin-right: 10px;
`;
