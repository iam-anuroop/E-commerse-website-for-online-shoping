import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import {kart} from "./Datas"
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useContext } from 'react';
import {context} from './MainRouter';



function Shopall() {

    const {caree}=useContext(context);    
    const {shopall,setShopall}=useContext(context);   

    setShopall(caree)
    console.log(shopall);



    useEffect(() => {
        window.scrollTo(0, 0);
      });

    const navigate=useNavigate()



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
            {shopall.map((item)=>(
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
                    <Button variant="primary rounded-sm" onClick={() => Addkart(item , kart)}>Add to cart</Button>
                    <Button onClick={()=>{navigate(`/details/${item.id}`)}} variant="info rounded-sm"> Details</Button> 
                    </Card.Body>
                </Card>
                </div>
            ))}
            
            
            </Container>
        </div>
      )
}

export default Shopall