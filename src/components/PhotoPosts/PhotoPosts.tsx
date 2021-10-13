import React from 'react';
import { useGetPhotoPostQuery } from '../../features/posts/postsSlice';
import {
  Wrapper,
  InnerWrapper,
  Header,
  PostWrapper,
  Photo,
  Text,
} from './PhotoPostsStyles';

const PhotoPosts = () => {
  const { data: photoPost } = useGetPhotoPostQuery();

  return (
    <Wrapper>
      <Header>손익인증게시판</Header>
      <InnerWrapper>
        {photoPost?.slice(0, 10).map((element) => (
          <PostWrapper>
            <Photo src={element.thumbnailUrl}></Photo>
            <Text>{element.title}</Text>
          </PostWrapper>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};

export default PhotoPosts;
