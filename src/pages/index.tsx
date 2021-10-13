import type { NextPage } from 'next';
import MainComments from '../components/MainComments/MainComments';
import MainPosts from '../components/MainPosts/MainPosts';
import PhotoPosts from '../components/PhotoPosts/PhotoPosts';
import { Wrapper, ListWrapper } from '../styles/pages/HomeStyles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <PhotoPosts />
      <ListWrapper>
        <MainPosts />
        <MainComments />
      </ListWrapper>
    </Wrapper>
  );
};

export default Home;
