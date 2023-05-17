import React, { useContext} from 'react'
import Logo from './Assets/logo.png'
import {useNavigate} from "react-router-dom"
import {context} from './MainRouter';


function Navbar() {

    const navigate=useNavigate()
    const {admin,icon}=useContext(context);
    



    function handleadmin(){
        if(admin){
            navigate('/admin')
        }else{
            navigate('/adminlogin')
        }
    }

   


  return (
    <div>
        <header className='nav_header container-fluid'>
                <div className='nav_header_1'>
                    <div className='logo_image_div'><img onClick={()=>{navigate('/')}} className='image_logo' alt='Brand logo' src={Logo} /></div>
                    <div className='nav_ul_div container-fluid'>
                        <ul className='nav_ul'>
                            <li onClick={()=>{navigate('/')}}>Home</li>                        
                            <li onClick={()=>{navigate('/shopall')}}>Shop</li>
                            <li>About Us</li>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                            <li onClick={handleadmin}>Admin</li>
                        </ul>
                    </div>
                </div>
                <div className='nav_header_2'>
                    <div className='nav_input_div container-fluid'>
                        <input className='search_input' type='text' placeholder='Search products...'></input>
                        <div className='search_arrow_div'><i className="search_arrow fa-solid fa-angle-right"></i></div>
                    </div>
                    <div className='nav_icon_div'>
                            <div><i onClick={()=>{navigate('/kart')}} className="kart_logo fa-solid fa-cart-shopping"></i></div>
                            <div>{icon}</div>
                            {/* <i onClick={()=>{navigate('/loginreg')}} className="user_logo fa-solid fa-user"></i> */}
                    </div>
                </div>
        </header>
    </div>
  )
}

export default Navbar