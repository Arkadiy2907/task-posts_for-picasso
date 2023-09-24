import PostListItem from './PostListItem';
import { useGetPostsQuery } from '../app/Api';
import { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const maxLimitPage = 10;
const jampScrollRev = 5;
const itemSize = 100;

function PostList() {
  const [page, setPage] = useState(0);
  const { data: posts, isLoading, isFetching } = useGetPostsQuery(page);
  const height = window.innerHeight + itemSize;

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      const scrolledToTop = window.scrollY === 0;

      if (scrolledToBottom && !isFetching && page < maxLimitPage) {
        setPage(page + 1);
        window.scrollTo(0, window.scrollY - jampScrollRev);
      } else if (scrolledToTop && !isFetching && page > 0) {
        setPage(page - 1);
        window.scrollTo(0, window.scrollY + jampScrollRev);
      }
    };

    document.addEventListener('scroll', onScroll);
    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  if (isLoading || !posts) {
    return <div>Loading...</div>;
  }

  return (
    <List
      height={height}
      itemCount={posts.length}
      itemSize={itemSize}
      width={'100%'}
    >
      {({ index, style }) => (
        <div style={style}>
          <PostListItem post={posts[index]} />
        </div>
      )}
    </List>
  );
}

export default PostList;