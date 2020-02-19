import React from 'react';
import PostPreview from './PostPreview';

const Feed = props => {
  const { posts } = props;
  const len = posts.length;
  if (len) {
    return props.posts.map((edge, i) => <PostPreview key={i} post={edge} />);
  }
  return (
    <p className="post-preview" style={{ textAlign: 'center' }}>
      "There's nothing here yet..."
    </p>
  );
};

export default Feed;
