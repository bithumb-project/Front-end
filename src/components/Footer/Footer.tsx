import React from 'react';
import { Wrapper, List, ListItem, SiteInfo, Item } from './FooterStyles';

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>제휴문의</ListItem>
        <ListItem>게재중단요청</ListItem>
        <ListItem>이용약관 및 개인정보취급방침</ListItem>
      </List>
      <SiteInfo>
        <Item>E-mail : webmaster@bithumbup.com</Item>
        <Item>Copyright© BITHUMBUP All Rights Reserved.</Item>
      </SiteInfo>
    </Wrapper>
  );
};

export default Footer;
