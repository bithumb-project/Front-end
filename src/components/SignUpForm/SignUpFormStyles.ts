import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';

export const BigAvatar = styled(Avatar)`
  && {
    width: 120px;
    height: 120px;
    margin-top: 24px;
    position: relative;
    overflow: visible;
  }
`;

export const PersonAvatar = styled(PersonIcon)`
  && {
    font-size: 70px;
  }
`;

export const AddIconSmall = styled(AddIcon)`
  && {
    color: white;
    background-color: gray;
    position: absolute;
    border-radius: 50%;
    transform: translate(300%, 150%);
  }
`;

export const ImageUpload = styled.img`
  width : 100%;
  height: 100%;
  border-radius: 50%;
`;

export const MoveToLogin = styled.span`
  color: #1976d2;
  text-decoration: underline;
  text-decoration-color: rgba(25,118,210,0.4);
  cursor: pointer;
`;