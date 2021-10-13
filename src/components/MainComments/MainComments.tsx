import { useRouter } from 'next/router';
import { useAppDispatch } from '../../app/hooks';
import { useGetCommentsQuery } from '../../features/comments/commentsSlice';
import {
  blameCount,
  isDeclare,
  recommendCount,
} from '../../features/posts/postsReducer';

import {
  ListStyle,
  ListSubHeaderStyle,
  ListItemButtonStyle,
  ListItemTextStyle,
} from '../../styles/ListStyles';

const MainComments = () => {
  const router = useRouter();
  const { data: comments } = useGetCommentsQuery();

  const dispatch = useAppDispatch();

  return (
    <ListStyle subheader={<ListSubHeaderStyle>BEST 댓글</ListSubHeaderStyle>}>
      {comments?.slice(0, 7).map((element) => (
        <ListItemButtonStyle>
          <ListItemTextStyle
            primary={element.body}
            onClick={() => {
              router.push(`/board/${element.postId}`);
              dispatch(recommendCount(0));
              dispatch(blameCount(0));
              dispatch(isDeclare(false));
            }}
          />
        </ListItemButtonStyle>
      ))}
    </ListStyle>
  );
};

export default MainComments;
