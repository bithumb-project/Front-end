import { useRouter } from 'next/router';
import { useAppSelector } from '../../../app/hooks';

import { useGetPostQuery } from '../../../features/posts/postsSlice';

import {
  Header,
  PostInfoWrapper,
  Wrapper,
  UserInfo,
  CreatedInfo,
  UserInfoElement,
  PostBody,
  PostButtonWrapper,
  PostButton,
  SeparationLine,
} from '../../../styles/boardIdStyles';

import { getToday } from '../../../utils/Date';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import Comments from '../../../components/Comments/Comments';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, isLoading } = useGetPostQuery(String(id));
  const commentCount = useAppSelector(
    ({ commentsState }) => commentsState.data.length
  );

  return (
    <>
      {isLoading && 'is Loading...'}
      {!isLoading && post && (
        <Wrapper>
          <Header>{post.title}</Header>
          <PostInfoWrapper>
            <UserInfo>
              <UserInfoElement borderDisplay='right'>
                {post.userId}
              </UserInfoElement>
              <UserInfoElement borderDisplay='right'>추천: </UserInfoElement>
              <UserInfoElement borderDisplay='right'>비추천: </UserInfoElement>
              <UserInfoElement borderDisplay='right'>
                댓글 {commentCount}
              </UserInfoElement>
            </UserInfo>
            <CreatedInfo>
              <UserInfoElement borderDisplay='left'>{getToday}</UserInfoElement>
              <UserInfoElement borderDisplay='left'>조회수</UserInfoElement>
            </CreatedInfo>
          </PostInfoWrapper>
          <PostBody>{post.body}</PostBody>
          <PostButtonWrapper>
            <PostButton variant='outlined' startIcon={<ThumbUpIcon />}>
              추천
            </PostButton>
            <PostButton
              variant='outlined'
              color='warning'
              startIcon={<ThumbDownIcon />}
            >
              비추천
            </PostButton>
            <PostButton
              variant='outlined'
              color='error'
              startIcon={<WbTwilightIcon />}
            >
              신고
            </PostButton>
          </PostButtonWrapper>
          <SeparationLine />
          <Header>Comments</Header>
          <Comments id={String(id)} />
        </Wrapper>
      )}
    </>
  );
};

export default Index;
