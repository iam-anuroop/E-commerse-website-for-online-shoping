import React from 'react'
import { useState } from 'react'
import { user } from './Datas';
import { useContext } from 'react';
import {context} from './MainRouter';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Dropdownsignup from './Dropdownsignup';



function Login() {

    const navigate=useNavigate()

    
    const {setBuy,setIcon}=useContext(context);

    //destructuring

    const [inputvalue,setInputalue]=useState({
        username:"",
        password:""
    })

    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputalue((prev)=>{
            return({...prev,[name]:value,});
        });
    }


    function checkUser(username, password) {
        for (let i = 0; i < user.length; i++) {
          const x = user[i];
          
          if (x.username === username && x.password === password) {
            return true; 
          }
        }   
        return false;
      }

      const logout=()=>{setBuy(false)
        setIcon(<Dropdownsignup/>)}




    function handlelogin(){
        const nameofuser=inputvalue.username;
        const passofuser=inputvalue.password;
        const userExists = checkUser(nameofuser,passofuser);
        // temp.push(inputvalue);
        // console.log(temp);
        // const passwordofuser = user.filter(items => items.password ===pass);
        if(userExists){
            setBuy(true)
            setIcon(<i onClick={logout} title='logout' className="fa-solid fa-right-from-bracket"></i>)
            alert("Login successfull");
            
            setInputalue(
                {username:"",
                password:""}
            )
            navigate('/')
        }
        else{
            alert("Invalid username or password");
            setInputalue(
                {username:"",
                password:""}
            )
        }
        
        }



  return (
    <>
        <Navbar/>
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form className="login-form">
                <div className="form-group">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text"value={inputvalue.username} name='username' onChange={handlechange} placeholder='Enter your username' id="username" className="form-input" />
                </div>
                <div className="form-group">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password"value={inputvalue.password} name='password' onChange={handlechange} placeholder='Enter your password' id="password" className="form-input" />
                </div>
                <button type="submit"onClick={handlelogin} className="login-button">Log In</button>
            </form>
        </div>
    </>
  )
}

export default Login