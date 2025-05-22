import React from 'react';


export function Home() {
    return (
        <>
        {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
        </>
    )
}