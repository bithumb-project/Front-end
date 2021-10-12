import type { NextPage } from 'next';
import MainComments from '../components/MainComments/MainComments';
import MainPosts from '../components/MainPosts/MainPosts';
import { Wrapper } from '../styles/pages/HomeStyles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <MainPosts />
      <MainComments />
    </Wrapper>
  );
};

export default Home;
