import React, {useState} from 'react'

const UpdatePost = ({el,currentPost,updatePost}) => {
    console.log(currentPost);
    const [title, setTitle] = useState(currentPost.title)
    const [content, setContent] = useState(currentPost.content)
    const [author, setAuthor] = useState(currentPost.author)
  return (
    <div className="contact-form">
  <span className="heading">Update Post</span>
  <form>
    <label for="name">Update Post Title</label>
    <input type="text"  defaultValue={currentPost.title} onChange={(e)=>setTitle(e.target.value)}/>
    <label for="name">Update Post Author</label>
    <input type="text"  defaultValue={currentPost.author} onChange={(e)=>setAuthor(e.target.value)}/>
    <label for="message">Update Content</label>
    <textarea id="message" name="message"  defaultValue={currentPost.content} onChange={(e)=>setContent(e.target.value)}/>
    <button type="button"onClick={()=>updatePost({title,content,author})}>Submit</button>
  </form>
</div>

      )
}

export default UpdatePost