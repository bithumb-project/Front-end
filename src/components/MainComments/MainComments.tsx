import React from 'react';
import { useGetCommentsQuery } from '../../features/comments/commentsSlice';

import {
  ListStyle,
  ListSubHeaderStyle,
  ListItemButtonStyle,
  ListItemTextStyle,
} from '../../styles/ListStyles';

const MainComments = () => {
  const { data: comments } = useGetCommentsQuery();

  return (
    <ListStyle subheader={<ListSubHeaderStyle>BEST 댓글</ListSubHeaderStyle>}>
      {comments?.slice(0, 7).map((element) => (
        <ListItemButtonStyle>
          <ListItemTextStyle primary={element.body} />
        </ListItemButtonStyle>
      ))}
    </ListStyle>
  );
};

export default MainComments;
