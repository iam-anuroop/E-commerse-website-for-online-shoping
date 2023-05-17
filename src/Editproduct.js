import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import {care,toys,dress} from "./Datas"
import { Button } from 'react-bootstrap'
import { useContext } from 'react';
import {context} from './MainRouter';
import './Editproduct.css'


function Editproduct() {


    const {caree}=useContext(context);

    const{paramid}=useParams()
   
    const okay=caree.filter((item)=>{
        return item.id===parseInt(paramid)
    });
    const[add,setAdd]=useState( okay[0] );



    const handlechange=(e)=>{

        const name=e.target.name;
        const value=e.target.value;

        setAdd((prev)=>{
            return({...prev,[name]:value});
        });
    }



    function handleconfirm(id){
        console.log(add);
        const index = caree.findIndex(item => item.id === id);
        caree[index]=add;

        // setCare([...caree,add])
    }


    const navigate =useNavigate()

  return (
    <div className='editproduct_main'>
    <div className='editproduct_head'>
        <h1>Edit Product</h1>
    </div>
    <div className='editproduct_content'>
        <div className='editproduct_inputs'>
            <div className='editproduct_input'>
                <div className='input_field'>
                    <h5>Name of product</h5>
                    <input value={add.name} name='name' onChange={handlechange} placeholder='Name of product...' />
                </div>
                <div className='input_field'>
                    <h5>Enter path/address of image</h5>
                    <input value={add.url} name='url' onChange={handlechange} placeholder='Address of product...' />
                </div>
                <div className='input_field'>
                    <h5>Price</h5>
                    <input value={add.price} name='price' onChange={handlechange} placeholder='Price of product...' />
                </div>
                <div className='input_field'>
                    <h5>Details</h5>
                    <textarea value={add.det} name='det' onChange={handlechange} placeholder='Details of product...'></textarea>
                </div>
                <div className='input_field'>
                    <h5>Select type</h5>
                    <select name='type' value={add.type} onChange={handlechange}>
                        <option>Select type of product</option>
                        <option value="dress">Dress</option>
                        <option value="toys">Toys</option>
                        <option value="care">Care</option>
                    </select>
                </div>
            </div>
            <div className='editproduct_buttons'>
                <Button onClick={handleconfirm(add.id)}>Confirm</Button>
                <Button onClick={()=>navigate('/admin')}>Go back</Button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Editproduct