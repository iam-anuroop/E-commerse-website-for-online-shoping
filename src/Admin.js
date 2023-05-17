import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { user } from './Datas';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
// import Adminuserslist from './Adminuserslist';
import Productedit from './Productedit';
import Adminuserslist from './Adminuserslist'
import { useState } from 'react';
import Addproducts from './Addproducts';


        
function Admin() {

  const navigate=useNavigate()
  const[value,setValue]=useState(<Adminuserslist/>)

  return (
    <div style={{display:"flex"}}>
      <div>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <p onClick={()=>{navigate("/") }} className="home text-decoration-none" style={{ color: 'inherit',cursor:'pointer'}}>
            Home
          </p>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact onClick={()=>setValue(<Adminuserslist/>)} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact onClick={()=>setValue(<Productedit/>)} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact onClick={()=>setValue(<Addproducts/>)} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Revenue</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Admin page...
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </div>
    <div> 
      {value}
    </div>
        
    </div>
  )
}

export default Admin