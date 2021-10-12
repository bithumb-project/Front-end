import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import {
  useGetPostQuery,
  useGetPostsQuery,
} from '../../../features/posts/postsSlice';

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
} from '../../../styles/pages/BoardIdPageStyles';

import { getToday } from '../../../utils/Date';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import Comments from '../../../components/Comments/Comments';
import {
  blameCount,
  isDeclare,
  recommendCount,
} from '../../../features/posts/postsReducer';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  const { data: post, isLoading } = useGetPostQuery(String(id));
  const commentCount = useAppSelector(
    ({ commentsState }) => commentsState.data.length
  );

  const { data: postsData } = useGetPostsQuery();

  const count =
    postsData && postsData?.filter((element) => element.id === Number(id))[0];

  useEffect(() => {
    dispatch(recommendCount(count?.recommend));
    dispatch(blameCount(count?.blame));
    dispatch(isDeclare(count?.declare));
  }, []);

  const recommend = useAppSelector(({ postsState }) => postsState.recommend);
  const blame = useAppSelector(({ postsState }) => postsState.blame);
  const declare = useAppSelector(({ postsState }) => postsState.declare);

  const handleDeclare = () => {
    if (declare === true) alert('이미 신고되었습니다.');
    if (declare === false) {
      const checkConfirm = confirm('정말로 신고하시겠습니까?');

      if (checkConfirm === false) {
        return;
      }
      dispatch(isDeclare(true));
    }
  };

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
              <UserInfoElement borderDisplay='right'>
                추천 {recommend}
              </UserInfoElement>
              <UserInfoElement borderDisplay='right'>
                비추천 {blame}
              </UserInfoElement>
              <UserInfoElement borderDisplay='right'>
                댓글 {commentCount}
              </UserInfoElement>
            </UserInfo>
            <CreatedInfo>
              <UserInfoElement borderDisplay='left'>{getToday}</UserInfoElement>
              <UserInfoElement borderDisplay='left'>
                조회수 {count?.view}
              </UserInfoElement>
            </CreatedInfo>
          </PostInfoWrapper>
          <PostBody>{post.body}</PostBody>
          <PostButtonWrapper>
            <PostButton
              variant='outlined'
              startIcon={<ThumbUpIcon />}
              onClick={() => {
                dispatch(recommendCount(1));
              }}
            >
              추천 {recommend}
            </PostButton>
            <PostButton
              variant='outlined'
              color='warning'
              startIcon={<ThumbDownIcon />}
              onClick={() => {
                dispatch(blameCount(1));
              }}
            >
              비추천 {blame}
            </PostButton>
            <PostButton
              variant='outlined'
              color='error'
              startIcon={<WbTwilightIcon />}
              onClick={handleDeclare}
            >
              신고 {declare ? 1 : 0}
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
