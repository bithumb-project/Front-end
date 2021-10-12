import { useGetPostsQuery } from '../../features/posts/postsSlice';
import {
  ListStyle,
  ListSubHeaderStyle,
  ListItemButtonStyle,
  ListItemTextStyle,
} from '../../styles/ListStyles';

const MainPosts = () => {
  const { data: postsData, isLoading } = useGetPostsQuery();

  return (
    <ListStyle subheader={<ListSubHeaderStyle>HOT 게시물</ListSubHeaderStyle>}>
      {postsData?.slice(0, 7).map((element) => (
        <ListItemButtonStyle>
          <ListItemTextStyle primary={element.title} />
        </ListItemButtonStyle>
      ))}
    </ListStyle>
  );
};

export default MainPosts;
