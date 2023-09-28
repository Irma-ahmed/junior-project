import React from 'react'
import OnePost from './OnePost.jsx'

const AllPosts = ({posts,deletePost,updatePost,setView,currentPost,setPostId}) => {
  return (
    <div>{posts.map((el)=> <OnePost setPostId={setPostId} el={el} key={el.id} deletePost={deletePost} updatePost={updatePost} setView={setView} currentPost={currentPost} />)}
    </div>
  )
}

export default AllPosts