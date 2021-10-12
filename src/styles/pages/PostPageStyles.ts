import styled, { css } from 'styled-components';
import Theme from '../Theme';
import { Button } from '@mui/material';

import TextareaAutosize from '@mui/material/TextareaAutosize';

export const AddTitle = styled(TextareaAutosize)`
  width: 100%;
  margin-bottom: 15px;
`;

export const AddText = styled(TextareaAutosize)`
  width: 100%;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  border: 1px solid ${Theme.palette.secondary.main};
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 36px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #555;
  text-indent: 15px;
  padding: 18px 10px;
  border-bottom: 0;
`;

export const PostInfoWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${Theme.palette.secondary.light};
  font-size: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const CreatedInfo = styled.div`
  display: flex;
`;

export const UserInfoElement = styled.li<{ borderDisplay?: string }>`
  padding: 10px 15px;
  ${({ borderDisplay }) => {
    if (borderDisplay === 'left') {
      return css`
        border-left: 1px solid ${Theme.palette.secondary.light};
      `;
    }
    if (borderDisplay === 'right') {
      return css`
        border-right: 1px solid ${Theme.palette.secondary.light};
      `;
    }
  }}
`;

export const PostBody = styled.div`
  padding: 20px;
  color: #4e4e4e;
  line-height: 1.5;
`;

export const PostButtonWrapper = styled.div`
  padding: 15px 0;
  text-align: center;
`;

export const PostButton = styled(Button)`
  margin-right: 10px;
`;

export const SeparationLine = styled.div`
  border-top: 1px dashed ${Theme.palette.secondary.light};
  margin: 18px 10px;
`;

export const RedoButtonWrapper = styled(Button)`
  display: flex;
  margin-left: auto;
  padding: 10px 0;
  & > * {
    margin-left: 10px;
  }
`;
