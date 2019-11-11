import React from 'react';
import PostPreview from './PostPreview';

const Feed = props => {
  const len = props.posts.length;
  if (len) {
    return props.posts.map((edge, i) => {
      return <PostPreview key={i} post={edge} />;
    });
  } else {
    return (
      <p className="post-preview" style={{ textAlign: 'center' }}>
        "There's nothing here yet..."
      </p>
    );
  }
};

export default Feed;
