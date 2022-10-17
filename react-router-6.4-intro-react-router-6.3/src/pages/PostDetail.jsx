import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
	const {title, body} = useLoaderData();
	// const [error, setError] = useState();
	// const [post, setPost] = useState();
	// const [isLoading, setIsLoading] = useState(false);

	// const params = useParams();
	// const { id } = params;

	// useEffect(() => {
	//   async function loadPost() {
	//     setIsLoading(true);
	//     try {
	//       const post = await getPost(id);
	//       setPost(post);
	//     } catch (err) {
	//       setError(err.message);
	//     }
	//     setIsLoading(false);
	//   }

	//   loadPost();
	// }, [id]);

	return (
		<>
			{/* {isLoading && <p>Loading post...</p>}
      {error && <p>{error.message}</p>}
      {!error && post && <BlogPost title={post.title} text={post.body} />} */}
			{/* <p>Loading post...</p> */}
			<BlogPost title={title} text={body} />
		</>
	);
}

export default PostDetailPage;

export const loader = ({ params }) => {
	return getPost(params.id);
};
