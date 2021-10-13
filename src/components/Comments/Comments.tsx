import { useEffect } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '../../app/hooks';

import {
  Wrapper,
  ImageWrapper,
  CommentWrapper,
  InfoWrapper,
  BodyWrapper,
  UserInfo,
  CreatedInfo,
  Nickname,
} from './CommentsStyles';

import { useGetCommentQuery } from '../../features/comments/commentsSlice';
import { initCommentData } from '../../features/comments/commentsReducer';
import { getToday } from '../../utils/Date';
import NoImage from '../../assets/no_image.png';

const Comments = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const { data: comment, isLoading } = useGetCommentQuery(id);

  useEffect(() => {
    if (comment) {
      dispatch(initCommentData(comment));
    }
  }, [dispatch, comment]);

  return (
    <>
      {!isLoading &&
        comment &&
        comment?.map((element) => (
          <Wrapper key={element.id}>
            <ImageWrapper>
              <Image
                src={NoImage}
                alt='no image'
                layout='fixed'
                width={100}
                height={100}
              />
            </ImageWrapper>
            <CommentWrapper>
              <InfoWrapper>
                <UserInfo>
                  <Nickname>닉네임 {element.id}</Nickname>
                  <Nickname>{element.email}</Nickname>
                </UserInfo>
                <CreatedInfo>{getToday}</CreatedInfo>
              </InfoWrapper>
              <BodyWrapper>{element.body}</BodyWrapper>
            </CommentWrapper>
          </Wrapper>
        ))}
    </>
  );
};

export default Comments;
