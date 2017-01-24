import React from 'react';
import { Link } from 'react-router';
import './PostLinks.css';

const PostItem = ( { active, children, to } ) => (
	<Link to={ to } className={ active ? 'active' : '' }>
		{ children }
	</Link>
);

const PostLinks = ( props, context ) => {
	const { router } = context;
	return (
		<div className="post-links">
			<PostItem to="/post/1" active={ router.isActive( '/post/1', true ) }>1</PostItem>
			<PostItem to="/post/2" active={ router.isActive( '/post/2' ) }>2</PostItem>
			<PostItem to="/post/3" active={ router.isActive( '/post/3' ) }>3</PostItem>
			<PostItem to="/post/4" active={ router.isActive( '/post/4' ) }>4</PostItem>
		</div>
	);
};

PostLinks.contextTypes = {
	router: React.PropTypes.object
};

export default PostLinks;
