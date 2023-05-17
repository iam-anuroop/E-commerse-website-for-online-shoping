import React, { useState } from 'react'
import { user } from './Datas';
import { useEffect } from 'react';
import './Registration.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';



function Registration() {

  const navigate=useNavigate()

    const [inputvalue,setInputalue]=useState({
        firstname:"",
        lastname:"",
        email:"",
        username:"",
        password:""
        
    })

    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputalue((prev)=>{
            return({...prev,[name]:value});
        });
    }
   const handlesubmit=(e)=>{
    e.preventDefault();
    const fn=inputvalue.firstname;
    const sn=inputvalue.lastname;
    const mail=inputvalue.email;
    const un=inputvalue.username;
    const pass=inputvalue.password

    const uncheck=user.some(item => item.username === inputvalue.username);

    if(pass===reenter&&(fn.length,sn.length)>=1&&pass.length>5&&mail.length>10&&un.length>5&&uncheck!==true){
        alert('login now...')
        user.push(inputvalue);
        setInputalue(
        {
            firstname:"",
            lastname:"",
            email:"",
            username:"",
            password:""
        })
        navigate('/login')
        
    setReenter("")
    }else{
        if(uncheck===true){
            alert('user name already taken')
        }else{
        alert("Please provide all details properly...")
        }
    }
    
    }

    const[reenter,setReenter]=useState();
    const[wrong,setWrong]=useState("Re enter the password");



        useEffect(() => {
            if(reenter!==inputvalue.password){
                setWrong("Confirm password");
            }else{
                setWrong("password matched")
            }
        }, [reenter,inputvalue.password]);

        const checkpass=(e)=>{
            setReenter(e.target.value)
            console.log(reenter);
           
        }



  return (
    <div>
        <Navbar/>

        <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input type="text" value={inputvalue.firstname} name='firstname' onChange={handlechange} placeholder='Enter your firstname' id="firstName" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input type="text" value={inputvalue.lastname} name='lastname' onChange={handlechange} placeholder='Enter your lastname' id="lastName" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email"value={inputvalue.email} name='email' onChange={handlechange} placeholder='Enter your Email' id="email" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text"value={inputvalue.username} name='username' onChange={handlechange} placeholder='Enter a username' id="username" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input value={inputvalue.password} name='password' onChange={handlechange} type='password' placeholder='Enter your password' id="password" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">{wrong}:</label>
          <input value={reenter} name='password' onChange={checkpass} type='password' placeholder='Reenter your password' id="confirmPassword" className="form-input" />
        </div>
        <button type="submit" onClick={handlesubmit} className="signup-button">Sign Up</button>
      </form>
    </div>
    </div>
  )
}

export default Registration