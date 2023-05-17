// import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
// import {dress} from "./Datas"
import { kart } from './Datas';
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar'
import { useEffect } from 'react';
import { useContext } from 'react';
import {context} from './MainRouter';
import { useState } from 'react';





const Items = () => {


    const {caree}=useContext(context);

    // const[items,setItems]=useState(dress);
    const[items,setItems]=useState([]);
    useEffect(() => {
        const data = caree.filter((item)=> (item.type)  === 'dress' );
        setItems(data)
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
        {items.map((item)=>(
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

export default Items














// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import './Items.css'
// import bunny from './Assets/big_bunny.jpg'
// import yellow from './Assets/yellow_dress.jpg'
// import orange from './Assets/orange_scaff.jpg'
// import white from './Assets/white_angel.jpg'
// import blue from './Assets/berry_blue.jpg'
// import green from './Assets/little green.jpg'





// function Items() {
//   return (
//     <div>
//         <div className='Items_maindiv container-fluid'>
//             <div className='Item_heading container-fluid'><h1>Kids Dresses</h1></div>
//             <div className='d_p_1'>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={orange} />
//                     <Card.Body>
//                     <Card.Title>Orange scaff</Card.Title>
//                     <Card.Text>
//                     Pure cotton,Soft material
//                     </Card.Text>
//                     <Button variant="primary">Add to kart</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={yellow} />
//                     <Card.Body>
//                     <Card.Title>Cute yellow</Card.Title>
//                     <Card.Text>
//                     Semi cotton, Soft material
//                     </Card.Text>
//                     <Button variant="primary">Add to kart</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={green} />
//                     <Card.Body>
//                     <Card.Title>Little green</Card.Title>
//                     <Card.Text>
//                     Semi cotton, Soft material
//                     </Card.Text>
//                     <Button variant="primary">Add to kart</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//             <div className='d_p_2'>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={blue} />
//                     <Card.Body>
//                     <Card.Title>Berry blue</Card.Title>
//                     <Card.Text>
//                     Pure cotton,Soft material
//                     </Card.Text>
//                     <Button variant="primary">Add to kart</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={bunny} />
//                     <Card.Body>
//                     <Card.Title>Bunny suite</Card.Title>
//                     <Card.Text>
//                     Pure cotton,Soft material
//                     </Card.Text>
//                     <Button variant="primary">Add to kart</Button>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={white} />
//                     <Card.Body>
//                     <Card.Title>Smart white</Card.Title>
//                     <Card.Text>
//                     Pure cotton,Soft material
//                     </Card.Text>
//                     <Button variant="primary">Add to kart</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Items