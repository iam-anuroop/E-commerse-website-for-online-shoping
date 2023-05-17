import React from 'react'
// import {care,toys,dress} from "./Datas"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './Productedit.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {context} from './MainRouter';




function Productedit() {

  const {caree}=useContext(context);


  const products=[...caree]
  const[product,setProduct]=useState(products)
  const [search, setSearch] = useState('');
  const navigate=useNavigate()


  const handleSearch = (query) => {
    const newList = products.filter(x => {
      const name = x.name.toLowerCase();
      const det = x.det.toLowerCase();
      const type = x.type.toLowerCase();
      const lowerCase = query.toLowerCase();
  
      return name.includes(lowerCase) || det.includes(lowerCase)||type.includes(lowerCase);
    });
    setProduct(newList);
  };



  function handleremove(id){
    setProduct(products.filter(item=>item.id!==id));
    handlesplice(id);
  }
  function handlesplice(id){
    const delcare = caree.findIndex(item => item.id === id);
      caree.splice(delcare, 1);
  }


  return (
    <div>
      <Container className='productlist_heading'><h2>hello Admin</h2></Container>
        <div className='search_productdiv'><input
         value={search} onChange={(e) => {
        setSearch(e.target.value);   //state
        handleSearch(e.target.value); //function
        }}
        className='product_searcher' 
        placeholder='Search...'
        /></div>
      <Container style={{overflow:'auto',height:'40rem'}}>
      {product.map((item)=>(
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
              <Button onClick={()=>handleremove(item.id)} variant="info rounded-sm"><i class="fa-regular fa-trash-can"></i></Button> 
              <Button variant="info rounded-sm" onClick={()=>{navigate(`/editproduct/${item.id}`)}}><i class="fa-regular fa-pen-to-square"></i></Button> 
              </Card.Body>
          </Card>
        </div>
    ))}
    
    
    </Container>
  </div>
  )
}

export default Productedit