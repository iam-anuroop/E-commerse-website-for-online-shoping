import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
// import {care,toys,dress} from "./Datas"
import { useContext } from 'react';
import {context} from './MainRouter';
import './Addproducts.css'


function Addproducts() {

    const {caree}=useContext(context);


    const [add,setAdd]=useState({
        id:"",
        name:"",
        type:"",
        url:"",
        price:"",
        det:'',
        qty:''
    })

    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setAdd((prev)=>{
            return({...prev,[name]:value,id:Date.now,qty:'1'});
        });
    }

    const handleadd=()=>{
            
            caree.push(add)
            
            setAdd({
                id: "",
                name: "",
                type: '',
                url: "",
                price: "",
                det: "",
                qty: ""
              });

        }



  return (
    <div className='mainmain'>
        <div className='firstfirst'>
            <h3>Add products</h3>
        </div>
        <div className='secondsecond'>
            <div className='thirdthird'>
                <div className='editinput_firstdiv'>
                <h5>Name of product</h5>
                <input className='editinput_first' value={add.name} name='name' onChange={handlechange} placeholder='Name of product...'/>
                </div>
                <div className='editinput_seconddiv'>
                <h5>Enter path/address of image</h5>
                <input className='editinput_second' value={add.url} name='url' onChange={handlechange} placeholder='Adress of product...'/>
                </div>
                <div className='editinput_thirddiv'>
                <h5>Price</h5>
                <input className='editinput_third' value={add.price} name='price' onChange={handlechange} placeholder='Price of product...'/>
                </div>
                <div className='editinput_fourthdiv'>
                <h5>Details</h5>
                <input className='editinput_fourth' value={add.det} name='det' onChange={handlechange} placeholder='Details of product...'/>
                </div>
                <div className='editdropdown_div'>
                <h5>Select type</h5>
                <select className='editdropdown' name='type' value={add.type} onChange={handlechange}>
                    <option  >Select type of product</option>
                    <option  value="dress">Dress</option>
                    <option  value="toys">Toys</option>
                    <option  value="care">Care</option>
                </select>
                </div>
            </div>
            <div className='editbuttonn'>
                <Button onClick={handleadd}>Add new product</Button>
            </div>
        </div>
    </div>
  )
}

export default Addproducts