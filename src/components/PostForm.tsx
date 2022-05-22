import React, { useState } from 'react';
import { useAction } from '../hooks/useAction';

const PostForm: React.FC = () => {
   const [post, setPost] = useState({ title: '', body: '' });

   const { fetchPostCreate } = useAction();

   const newPost = (e: any) => {
      e.preventDefault();
      fetchPostCreate(post)
      setPost({ title: '', body: '' });
   };

   return (
      <form>
         <input
            className='post__create'
            placeholder='Title'
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
         />
         <input
            className='post__create'
            placeholder='Body'
            type="text"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
         />
         <button className='create__post-btn' onClick={newPost}> Create post</button >
      </form >
   );
};

export default PostForm;