import React from 'react';
import useUser from '../../store/modules/userHooks';
import { Wrapper, UserInfo, UserEmail, LogoutBtn } from './UserBoxStyles';
import { Avatar } from '@mui/material';

const UserBox: React.FC = (props) => {
  const { user, logout } = useUser();

  return (
    <Wrapper>
      <UserInfo>
        <Avatar />
        <UserEmail>{user.email}</UserEmail>
      </UserInfo>
      <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
    </Wrapper>
  );
}

export default UserBox;