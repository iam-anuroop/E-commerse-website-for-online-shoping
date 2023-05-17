// import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
// import {toys} from "./Datas"
import { kart } from './Datas';
import {useNavigate} from "react-router-dom"
import  Navbar  from './Navbar';
import { useEffect } from 'react';
import { useContext } from 'react';
import {context} from './MainRouter';
import { useState } from 'react';



const Toys = () => {

    const {caree}=useContext(context);



    const[toys,settoys]=useState([]);
    useEffect(() => {
        const data = caree.filter((item)=> (item.type)  === 'toys' );
        settoys(data)
        console.log(data);
        window.scrollTo(0, 0);
      },[caree]);

  const navigate=useNavigate()


    // const decrement=(id)=>{
    //     const newItem=items.map((item)=>
    //     item.id===id && item.qty>1 ? {...item,qty:item.qty-1}:item);setItems(newItem);
    // }
    // const increment=(id)=>{
    //     const newItem=items.map((item)=>
    //     item.id===id ? {...item,qty:item.qty+1}:item);setItems(newItem);
    // }


    function Addkart(item , kart){       
        const existingItem = kart.find(cartItem => cartItem.id === item.id); 
        if(existingItem){
            alert("Item already in cart")
            // existingItem.qty++;
        }else{
            alert("Item added to cart")
            kart.push(item)
        }
    }




  return (
    <div>
        <Navbar/>
        <Container>
        {toys.map((item)=>(
            <div className='d-inline-flex ' key={item.id}>
            <Card className='shadow p-2 m-3 bg-white rounded' style={{ width: '18rem' }}>
                <Card.Img style={{height:"10rem",width:"10rem"}} variant="top" src={item.url} />
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                {item.det}
                </Card.Text>
                <h5>price: ₹ {item.price}</h5>
                {/* <div>
                    <p>
                        <button onClick={()=>decrement(item.id)}>-</button>
                        {item.qty}
                        <button onClick={()=>increment(item.id)}>+</button>
                    </p>
                </div> */}
                <Button variant="primary rounded-sm border" onClick={() => Addkart(item,kart)}>Add to cart</Button>
                <Button onClick={()=>{navigate(`/details/${item.id}`)}} variant="info rounded-sm"> Details</Button> 
                </Card.Body>
            </Card>
            </div>
        ))}
        
        
        </Container>
    </div>
  )
}

export default Toys

