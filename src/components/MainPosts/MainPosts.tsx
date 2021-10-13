import { useRouter } from 'next/router';
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

  return (
    <ListStyle subheader={<ListSubHeaderStyle>HOT 게시물</ListSubHeaderStyle>}>
      {postsData?.slice(0, 7).map((element) => (
        <ListItemButtonStyle>
          <ListItemTextStyle
            primary={element.title}
            onClick={() => router.push(`/board/${element.id}`)}
          />
        </ListItemButtonStyle>
      ))}
    </ListStyle>
  );
};

export default MainPosts;
