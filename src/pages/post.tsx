import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  useGetPostQuery,
  useGetPostsQuery,
  usePutPostMutation,
} from '../features/posts/postsSlice';
import {
  Title,
  AddText,
  AddTitle,
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
} from '../styles/pages/PostPageStyles';
import {
  addPostData,
  blameCount,
  isDeclare,
  recommendCount,
} from '../features/posts/postsReducer';

import {
  getHundredsRandomNumber,
  getTenRandomNumber,
  getToday,
} from '../utils/Date';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import Comments from '../components/Comments/Comments';
import { Button } from '@mui/material';

const post = () => {
  const [putPost] = usePutPostMutation();

  const [isSuccess, setIsSuccess] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();
  const dispatch = useAppDispatch();

  const id = getTenRandomNumber;

  useEffect(() => {
    dispatch(addPostData({ id: getHundredsRandomNumber, userId: id }));
  }, []);

  const { data: postsData } = useGetPostsQuery();

  const { data: post, isLoading } = useGetPostQuery(String(id));

  const commentCount = useAppSelector(
    ({ commentsState }) => commentsState.data.length
  );

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
  const updateBody = useAppSelector(({ postsState }) => postsState.post);
  const updateId = useAppSelector(({ postsState }) => postsState.post.id);
  console.log('🚀 ~ file: post.tsx ~ line 80 ~ post ~ updateBody', updateId);

  const data = {
    userId: 10,
    id: 100,
    title: 'ㅋㅋㅋ',
    body: 'ㅋㅋㅋㅋㅋㅋㅋ',
  };

  const addPost = async () => {
    try {
      if (updateBody && !isLoading) {
        const test = await putPost({
          id,
          updateBody,
        }).unwrap();
        setIsSuccess(true);
        console.log(test);
      }
    } catch (error) {
      alert(error);
      setIsSuccess(false);
    }
  };

  return (
    <div>
      <Title>새로운 글 작성하기</Title>
      {!isSuccess && (
        <>
          <AddTitle
            aria-label='제목'
            minRows={3}
            placeholder='제목을 입력하세요.'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              (e.key === 'Enter' || e.key === 'Tab') &&
                dispatch(addPostData({ title: title }));
            }}
          />
          <AddText
            aria-label='내용'
            minRows={20}
            placeholder='내용을 입력하세요.'
            onChange={(e) => {
              setBody(e.target.value);
            }}
            onKeyDown={(e) => {
              (e.key === 'Enter' || e.key === 'Tab') &&
                dispatch(addPostData({ body: body }));
            }}
          />
          <Button
            variant='contained'
            fullWidth
            disabled={title === '' && body === ''}
            onClick={() => {
              addPost();
            }}
          >
            등록하기
          </Button>
        </>
      )}
      {isLoading && 'is Loading...'}
      {updateBody && post && isSuccess && (
        <Wrapper>
          <Header>{updateBody.title}</Header>
          <PostInfoWrapper>
            <UserInfo>
              <UserInfoElement borderDisplay='right'>
                {updateBody.userId}
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
          <PostBody>{updateBody.body}</PostBody>
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
              onClick={() => {
                dispatch(isDeclare(true));
              }}
            >
              신고 {declare ? 1 : 0}
            </PostButton>
          </PostButtonWrapper>
        </Wrapper>
      )}
    </div>
  );
};

export default post;
