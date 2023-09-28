import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import CreateUser from './components/CreateUser.jsx';
import AllPosts from './components/AllPosts.jsx';
import CreatePost from './components/CreatePost.jsx';
import UpdatePost from './components/UpdatePost.jsx';

function App() {
  const [view, setView] = useState('login');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPost, setOnePost] = useState([])
  const [onePost, setOneePost] = useState([])
  const [update, setUpdate] = useState(false)
  const [postId, setPostId] = useState("")


  const handleLogin = (username) => {
    setLoggedInUser(username);
    setView('allPosts');
  };
  const handleSearch = (author)=>{
    console.log(author);
    getOnePosts(author)
  }

  const getPosts =()=>{
    axios.get('/api/post/getAll')
  .then((response) => {
    setPosts(response.data);
  })
  .catch((error) => {
    console.log('Error fetching posts:', error);
  });
  }
  const getOnePosts =(author)=>{
    axios.get(`/api/post/${author}`)
  .then((response) => {
    console.log(response.data)
    let arr=[]
    arr.push(response.data)
    setPosts(arr);

  })
  .catch((error) => {
    console.log('Error fetching posts:', error);
  });
  }
  const createPosts = (title,content,author)=>{
    axios.post('/api/post/add',{title:title,content:content,author,author})
  .then((response) => {
    setUpdate(!update)
    setView('allPosts')
  })
  .catch((error) => {
    console.log('Error adding user:', error);
  });
  }

  const deletePost = (id)=>{
    console.log(id)
    axios.delete(`/api/post/${id}`)
    .then((res)=>{
      setView('allPosts')
    })
    .catch((error)=>console.log(error))
  }
  const updatePost = (obj)=>{
    console.log(obj,'test')
    console.log(postId,'test2')
    setOnePost(obj)
    axios.put(`/api/post/${postId}`,obj)
    .then((res)=>{
      setUpdate(!update)
      setView('allPosts')
    })
    .catch((error)=>console.log(error))
  }

  const getUsers = ()=>{
    axios.get('/api/user/getAll')
  .then((response) => {
    setUsers(response.data);
  })
  .catch((error) => {
    console.log('Error fetching users:', error);
  });
  }

  const createUser = (userName,password)=>{
    axios.post('/api/user/add',{username:userName,password:password})
  .then((response) => {
    setUpdate(!update)
    setView('login')
  })
  .catch((error) => {
    console.log('Error adding user:', error);
  });
  }

  const fetch = ()=>{
    getPosts()
    getUsers()
  }

  useEffect(() => {
    fetch()
  }, [update]);

  const renderView = () => {
    if (view === 'login') {
      return <Login handleLogin={handleLogin} setView={setView} />;
    } else if (view==='createUser'){
      return <CreateUser createUser={createUser}/>
    } else if (view==='allPosts'){
      return (
        <div>
          <Navbar update={update} setUpdate={setUpdate} handleSearch={handleSearch }setView={setView}/>
        <AllPosts setPostId={setPostId} currentPost={currentPost} updatePost={updatePost} deletePost={deletePost} posts={posts} setView={setView}/>
        </div>
      )
    } else if (view==='createpost'){
      return (
        <div>
          <Navbar update={update} setUpdate={setUpdate}  handleSearch={handleSearch} setView={setView}/>
        <CreatePost createPosts={createPosts}/>
        </div>
      )
    }
    else if (view==='updatepost'){
      return (
        <div>
          <Navbar update={update} setUpdate={setUpdate} handleSearch={handleSearch} setView={setView}/>
          <UpdatePost  setView={setView} currentPost={currentPost} updatePost={updatePost}/>
        </div>
      )
    }
  };

  return (
    <div className="app">
      {renderView()}
    </div>
  );
}

export default App;
