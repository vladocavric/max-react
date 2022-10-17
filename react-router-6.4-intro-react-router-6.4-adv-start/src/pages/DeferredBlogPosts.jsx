import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';

import Posts from '../components/Posts';
import PostsLoaderSkeleton from '../components/PostsLoaderSkeleton';
import { getSlowPosts } from '../util/api';

function DeferredBlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      
    <Suspense fallback={<PostsLoaderSkeleton />} >
      <Await resolve={loaderData.posts} errorElement={<p>Error!!!! Something went wrong</p>}>
        {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
      </Await>
    </Suspense>
    </>
  );
}

export default DeferredBlogPostsPage;

export async function loader() {
  return defer({posts: getSlowPosts()});
}
