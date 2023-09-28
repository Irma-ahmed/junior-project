import React, { useState } from 'react';

const Navbar = ({setView,handleSearch,setUpdate,update}) => {
  const [search, setSearch]= useState('')
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://e7.pngegg.com/pngimages/651/218/png-clipart-blogger-logo-pyra-labs-icon-blogger-logo-miscellaneous-text-thumbnail.png" alt="Logo" />
        <span className="logo-text">C4'CES BLOG</span>
        <ul className="navbar-nav">
        <li className="nav-item">
          <a type='button' className="nav-link"onClick={()=>{setView('allPosts');setUpdate(!update)}}>Home</a>
        </li>
        <li className="nav-item">
          <button className="create-post-button" onClick={()=>setView('createpost')}>Create Post</button>
        </li>
      </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." className="search-input" onChange={(e)=>setSearch(e.target.value)}/>
        <button className="search-button"onClick={()=>handleSearch(search)}>Search</button>
      </div>
      <button className="logout-button"onClick={()=>setView('login')}>Logout</button>
    </nav>
  );
}

export default Navbar;
