import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
// import {care,toys,dress} from "./Datas"
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import {context} from './MainRouter';


function Details() {

    const {caree}=useContext(context);


    const navigate=useNavigate()


    const all=[...caree]
    const{paramid}=useParams()

    const product = all.find(item => item.id === parseInt(paramid) );


    // const detail=[...care,...toys,...dress]


    // const Item = detail.find(cartItem => cartItem.id === paramid); 
    return(
        <div>
            <Navbar/>
            <Container>
                <div>
                    <Card className='shadow p-2 m-3 bg-white rounded' style={{ width: '18rem' }}>
                        <Card.Img style={{height:"15rem",width:"15rem"}} variant="top" src={product.url} />
                    </Card>
                </div>
                <div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    {product.det}
                    </Card.Text>
                    <h3>price: ₹ {product.price}</h3>
                    <Button onClick={()=>{navigate('/shopall')}}>Continue shoping</Button>

                </div>
            </Container>
            
        </div>
    )

    
  
}

export default Details