import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import {
  useDeletePostMutation,
  useGetPostQuery,
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
  RedoButtonWrapper,
} from '../styles/pages/PostPageStyles';

import {
  addPostData,
  blameCount,
  isDeclare,
  recommendCount,
} from '../features/posts/postsReducer';

import { getTenRandomNumber, getToday } from '../utils/Date';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { Button } from '@mui/material';

const id = getTenRandomNumber;

const post = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [putPost] = usePutPostMutation();
  const [deletePost] = useDeletePostMutation();

  const recommend = useAppSelector(({ postsState }) => postsState.recommend);
  const blame = useAppSelector(({ postsState }) => postsState.blame);
  const declare = useAppSelector(({ postsState }) => postsState.declare);
  const updateBody = useAppSelector(({ postsState }) => postsState.post);
  const updateId = useAppSelector(({ postsState }) => postsState.post.id);

  const [isSuccess, setIsSuccess] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isDelete, setIsDelete] = useState(false);

  const { data: post, isLoading } = useGetPostQuery(String(id));

  useEffect(() => {
    dispatch(addPostData({ id: 101, userId: 11 }));
  }, []);

  useEffect(() => {
    dispatch(recommendCount(0));
    dispatch(blameCount(0));
    dispatch(isDeclare(false));
  }, []);

  const addPost = async () => {
    try {
      if (updateBody && !isLoading) {
        const test = await putPost({
          id,
          updateBody,
        }).unwrap();
        setIsSuccess(true);
        dispatch(addPostData({ title: test?.title, body: test?.body }));
        console.log(test);
      }
    } catch (error) {
      alert(error);
      setIsSuccess(false);
    }
  };

  const handleDeletePost = async () => {
    const checkConfirm = confirm('????????? ?????????????????????????');

    if (checkConfirm === false) {
      return;
    }

    if (checkConfirm === true) {
      try {
        await deletePost(id).unwrap();
        alert('??????????????? ?????????????????????.');
        router.push('/board');
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleDeclare = () => {
    if (declare === true) alert('?????? ?????????????????????.');
    if (declare === false) {
      const checkConfirm = confirm('????????? ?????????????????????????');

      if (checkConfirm === false) {
        return;
      }
      dispatch(isDeclare(true));
    }
  };

  return (
    <div>
      {!isSuccess && (
        <>
          <Title>????????? ??? ????????????</Title>
          <AddTitle
            aria-label='??????'
            minRows={3}
            placeholder='????????? ???????????????.'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              (e.key === 'Enter' || e.key === 'Tab') &&
                dispatch(addPostData({ title: title }));
            }}
            value={title}
          />
          <AddText
            aria-label='??????'
            minRows={20}
            placeholder='????????? ???????????????.'
            onChange={(e) => {
              setBody(e.target.value);
            }}
            onKeyDown={(e) => {
              (e.key === 'Enter' || e.key === 'Tab') &&
                dispatch(addPostData({ body: body }));
            }}
            value={body}
          />
          <Button
            variant='contained'
            fullWidth
            disabled={title === '' && body === ''}
            onClick={() => {
              addPost();
            }}
          >
            ????????????
          </Button>
        </>
      )}
      {updateBody && post && isSuccess && (
        <>
          <Wrapper>
            <Header>{updateBody.title}</Header>
            <PostInfoWrapper>
              <UserInfo>
                <UserInfoElement borderDisplay='right'>
                  {updateBody.userId}
                </UserInfoElement>
                <UserInfoElement borderDisplay='right'>
                  ?????? {recommend}
                </UserInfoElement>
                <UserInfoElement borderDisplay='right'>
                  ????????? {blame}
                </UserInfoElement>
                <UserInfoElement borderDisplay='right'>
                  ?????? {0}
                </UserInfoElement>
              </UserInfo>
              <CreatedInfo>
                <UserInfoElement borderDisplay='left'>
                  {getToday}
                </UserInfoElement>
                <UserInfoElement borderDisplay='left'>
                  ????????? {0}
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
                ?????? {recommend}
              </PostButton>
              <PostButton
                variant='outlined'
                color='warning'
                startIcon={<ThumbDownIcon />}
                onClick={() => {
                  dispatch(blameCount(1));
                }}
              >
                ????????? {blame}
              </PostButton>
              <PostButton
                variant='outlined'
                color='error'
                startIcon={<WbTwilightIcon />}
                onClick={handleDeclare}
              >
                ?????? {declare ? 1 : 0}
              </PostButton>
            </PostButtonWrapper>
          </Wrapper>
          <RedoButtonWrapper>
            <Button
              variant='outlined'
              onClick={() => {
                setIsSuccess(false);
                setTitle(updateBody.title);
              }}
            >
              ????????????
            </Button>
            <Button variant='outlined' color='error' onClick={handleDeletePost}>
              ????????????
            </Button>
          </RedoButtonWrapper>
        </>
      )}
    </div>
  );
};

export default post;
