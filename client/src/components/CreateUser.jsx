import React, { useState } from 'react';

const CreateUser = ({createUser}) => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="register">
      <form className="form1" >
        <span className="title">Sign up</span>
        <span className="subtitle">Create a free account</span>
        <div className="form-container">
          <input
            type="text"
            className="input"
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={()=>createUser(username,password)}>Sign up</button>
      </form>
    </div>
  )
}

export default CreateUser