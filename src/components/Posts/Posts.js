import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, searchText} = props;
  console.log('props=', props)

  return (
    <div className='posts-container-wrapper'>
      {posts.filter(item => item.username.includes(searchText)).map((item)=> <Post post={item} likePost={likePost}/>)}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
