import { Link } from 'react-router-dom';
import { PostListItemStyles, Btn } from './PostListItem.styles.js';

function PostListItem({ post }) {
  return (
    <PostListItemStyles>
      <h3>{post.id} {post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
      <Btn>
        <Link to={`/post/${post.id}`}>View</Link>
      </Btn>
    </PostListItemStyles>
  );
}

export default PostListItem;