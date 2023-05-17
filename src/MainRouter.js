import React from 'react'
import Home from './Home'
import Care from './Care'
import Toys from './Toys'
import { care } from './Datas'
import Items from './Items'
import { Route, Routes } from 'react-router-dom'
import Kart from './Kart'
import Shopall from './Shopall'
import Details from './Details'
import Admin from './Admin'
import Userdetails from './Userdetails'
import Adminuserslist from './Adminuserslist'
import Productedit from './Productedit'
import Addproducts from './Addproducts'
import Editproduct from './Editproduct'
import { createContext } from 'react'
import { useState } from 'react'
import Adminlogin from './Adminlogin'
import Dropdownsignup from './Dropdownsignup'
import Login from './Login'
import Registration from './Registration'




export const context=createContext()


const MainRouter = () => {


  const[buy,setBuy]=useState(false)
  const[caree,setCare]=useState(care)
  const[admin,setAdmin]=useState(false)
  const[shopall,setShopall]=useState([])
  const [icon,setIcon]=useState(<Dropdownsignup/>)
  

  return (
    <div>
      <div className='main_div'>
        <context.Provider value={{
          buy,setBuy,
          caree,setCare,
          admin,setAdmin,
          shopall,setShopall,
          icon,setIcon
          }}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/care' element={<Care/>}></Route>
          <Route path='/items' element={<Items/>}></Route>
          <Route path='/toys' element={<Toys/>}></Route>
          <Route path='/kart' element={<Kart/>}></Route>
          <Route path='/shopall' element={<Shopall/>}></Route>
          <Route path='/details/:paramid' element={<Details/>}></Route>
          <Route path='/admin' element={<Admin/>}>
            <Route path='adminuserslist' element={<Adminuserslist/>}></Route>
            <Route path='productedit' element={<Productedit/>}></Route>
            <Route path='addproducts' element={<Addproducts/>}></Route>
          </Route>
          <Route path='/userdetails/:paramusername' element={<Userdetails/>}></Route>
          <Route path='/editproduct/:paramid' element={<Editproduct/>}></Route>
          <Route path='/adminlogin' element={<Adminlogin/>}></Route>
        </Routes>
        </context.Provider>
    </div>
  </div>
  )
}

export default MainRouter;