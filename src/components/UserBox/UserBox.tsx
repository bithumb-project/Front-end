import React from 'react';
import useUser from '../../store/modules/userHooks';
import { Wrapper, UserInfo, UserEmail, UserContents, LogoutBtn, ContentsBtn } from './UserBoxStyles';
import { Avatar } from '@mui/material';

const UserBox: React.FC = (props) => {
  const { user, logout } = useUser();

  return (
    <Wrapper>
      <UserInfo>
        <Avatar />
        <UserEmail>{user.email}</UserEmail>
      </UserInfo>
      <UserContents>
        <ContentsBtn>내 글</ContentsBtn>
        <ContentsBtn>내 댓글</ContentsBtn>
        <ContentsBtn>메시지</ContentsBtn>
      </UserContents>
      <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
    </Wrapper>
  );
}

export default UserBox;