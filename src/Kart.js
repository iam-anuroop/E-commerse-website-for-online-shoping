import React from 'react'
import { kart } from './Datas'
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Navbar from './Navbar';
import './Kart.css'
import { useContext } from 'react';
import {context} from './MainRouter';
import { useNavigate } from 'react-router-dom';


function Kart() {


  const {buy}=useContext(context);  
  //destructuring 

  const[items,setItems]=useState(kart);


    const decrement=(id)=>{
        const newItem=items.map((item)=>
        item.id===id && item.qty>1 ? {...item,qty:item.qty-1}:item);setItems(newItem);
    }
    const increment=(id)=>{
        const newItem=items.map((item)=>
        item.id===id&&item.qty<10 ? {...item,qty:item.qty+1}:item);setItems(newItem);

    }

    let total=0


    const removefromkart = (id) => {
      setItems(items => items.filter(item => item.id !== id));
      handlesplice(id);
      
    };
    function handlesplice(id){
      const index = items.findIndex(item => item.id === id);
      items.splice(index, 1);
    }

    const navigate=useNavigate()


    function handlebuy(){
          if(buy){
            alert("You can buy products")
          }else{
            alert("You need to login first")
            navigate('/registration')
          }
    }


  
  return (
    <>
    <Navbar/>
        {items.map((item)=>(
          <>
            <Container className='container'>
              <div className='kart_maindiv'>
                <div className='second_kartmaindiv'>
                  <div className='kart_imgdiv'>
                    <Card.Img style={{height:"7rem",width:"7rem"}} variant="top" src={item.url} />
                  </div> 
                  <div className='kart_textdiv'>
                    <Card.Title>{item.name}</Card.Title>
                    <h5>price: ₹ {item.price}</h5>
                    <div className='qty_btndiv'>
                      <p>
                        <button onClick={()=>decrement(item.id)}>-</button>
                        {item.qty}
                        <button onClick={()=>increment(item.id)}>+</button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='btns_div'>
                  <div className='rmv_btndiv'>
                  <i onClick={()=>removefromkart(item.id)} class="fa-solid fa-xmark"></i>
                  </div>
                  <div className='buy_nowdiv'>
                  <Button  onClick={handlebuy}>Buy now</Button>
                  <h6>Total={item.qty*item.price}</h6>
                  </div>
                </div>
              </div>                
            </Container>
            <p style={{display:"none"}}>{total=total+item.qty*item.price}</p>
          </>  
        ))}
      <div className='total_div' >
      <h3>Total  {total}</h3>
      </div>
    </>
    
  )}


export default Kart