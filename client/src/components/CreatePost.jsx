import React, { useState } from 'react'

const CreatePost = ({createPosts}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    
    return (
        <div className="contact-form">
  <span className="heading">Create Post</span>
  <form>
    <label for="name">Post Title</label>
    <input type="text" required="" onChange={(e)=>setTitle(e.target.value)}/>
    <label for="name">Post Author</label>
    <input type="text" required=""onChange={(e)=>setAuthor(e.target.value)}/>
    <label for="message">Content</label>
    <textarea id="message" name="message" required="" onChange={(e)=>setContent(e.target.value)}/>
    <button type="button"onClick={()=>createPosts(title,content,author)}>Submit</button>
  </form>
</div>

      );
}

export default CreatePost