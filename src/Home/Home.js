import React from 'react';
import myImage from '../images/david-clode-9FvTOCfvt_w-unsplash.jpg';
import myImage1 from '../images/david-clode-iLwQIbWxv-s-unsplash (1).jpg';
import myImage2 from "../images/sense-atelier-VKzHzB4vDtQ-unsplash.jpg";
import { Post } from '../Post/Post';

export function Home() {
   const posts = [ 
    {
      id: 0,
      title: 'sea turtle',
      url: myImage,
      author: 'alexandra',
      ups: 456
    },
    {
      id: 1,
      title: 'post title',
      url: myImage1,
      author: 'jai',
      ups: 1234
    },
    {
      id: 2,
      title: 'my post title',
      url: myImage2,
      author: 'elsie',
      ups: 123456789
    }

   ]
    return (
        <>
        {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          //onToggleComments={onToggleComments(index)}
        />
      ))}
        </>
    )
}