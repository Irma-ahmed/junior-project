import React from 'react'
import UpdatePost from './UpdatePost.jsx'

const OnePost = ({el,deletePost,setView,setPostId}) => {
  return (
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text">{el.content}</p>
    <a href="#" className="btn btn-primary btn-rounded">{el.author}</a>
    <button type="button" className="btn btn-danger btn-rounded"onClick={()=>deletePost(el.id)}>Delete Post</button>
    <button type="button" className="btn btn-warning btn-rounded"onClick={()=> {setPostId(el.id);setView('updatepost')}}>Update post</button>
    
  </div>
</div>
  )
}

export default OnePost