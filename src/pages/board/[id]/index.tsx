import { useRouter } from 'next/router';
import Link from 'next/link';
import { useGetPostQuery } from '../../../features/posts/postsSlice';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, isLoading } = useGetPostQuery(String(id));
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ Index ~ data', post);

  return (
    <>
      {isLoading && 'is Loading...'}
      {!isLoading && post && (
        <>
          <h1>Board: {id}</h1>
          <div>{post.userId}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </>
      )}
    </>
  );
};

export default Index;
