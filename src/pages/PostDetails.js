import { useGetPostByIdQuery } from '../app/Api';
import { useParams, Link } from 'react-router-dom';
import { PostListItemStyles, Btn } from './PostListItem.styles.js';

function PostDetails() {
  const { postId } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(postId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PostListItemStyles>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Btn>
        <Link to="/">
          back
        </Link>
      </Btn>
    </PostListItemStyles>
  );
}

export default PostDetails;
