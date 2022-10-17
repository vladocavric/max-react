import classes from './PostsLoaderSkeleton.module.css';

const PostsLoaderSkeleton = () => {
	const boxes = [1, 1, 1, 1, 1];
	return (
		<div className={classes.posts}>
			{boxes.map((box, index) => (
				<div
					key={index}
					className={`${classes.loaderBox} ${classes.postBox}`}></div>
			))}
		</div>
	);
};

export default PostsLoaderSkeleton;
