import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useNavigate} from "react-router-dom"


function Dropdownsignup() {


  const navigate=useNavigate()


  return (
    <div>
        <div><DropdownButton
            align="end"
            title="Sign up"
            id="dropdown-menu-align-end"
            >
            <Dropdown.Item onClick={()=>navigate('/login')} eventKey="1">Login</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/registration')} eventKey="2">Sign up</Dropdown.Item>
            </DropdownButton>
        </div>
    </div>
  )
}

export default Dropdownsignup