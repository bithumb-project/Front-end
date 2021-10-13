import { useRouter } from 'next/router';
import { useAppDispatch } from '../../app/hooks';
import {
  blameCount,
  isDeclare,
  recommendCount,
} from '../../features/posts/postsReducer';
import { useGetPostsQuery } from '../../features/posts/postsSlice';
import {
  ListStyle,
  ListSubHeaderStyle,
  ListItemButtonStyle,
  ListItemTextStyle,
} from '../../styles/ListStyles';

const MainPosts = () => {
  const router = useRouter();
  const { data: postsData } = useGetPostsQuery();

  const dispatch = useAppDispatch();

  return (
    <ListStyle subheader={<ListSubHeaderStyle>HOT 게시물</ListSubHeaderStyle>}>
      {postsData?.slice(0, 7).map((element) => (
        <ListItemButtonStyle>
          <ListItemTextStyle
            primary={element.title}
            onClick={() => {
              router.push(`/board/${element.id}`);
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

export default MainPosts;
