import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Adminlogin.css'
import {context} from './MainRouter';


function Adminlogin() {

    const uname='anuroop'
    const pword='password'
    const navigate=useNavigate()
    const {setAdmin}=useContext(context);


    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    if(username===uname&&password===pword){
        navigate('/admin')
        setAdmin(true)
    }else{
        alert('check username and password')
    }
  };
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div className="input-container">
          <label>Username</label>
          <input type="text" placeholder='Enter admin username' value={username} onChange={handleUsernameChange} />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" placeholder='Enter the password' value={password} onChange={handlePasswordChange} />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </form>
      <div><i onClick={()=>navigate('/')} className="fa-solid fa-house-chimney"></i></div>
    </div>
  )
}

export default Adminlogin