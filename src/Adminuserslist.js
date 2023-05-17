import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { user } from './Datas'
import { Container } from 'react-bootstrap';
import './Adminuserslist.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Adminuserslist() {


    const [items,seItems]=useState(user);

    const removeuser = (username) => {
        seItems(items.filter(item=>item.username!==username));
      handlesplice(username);
      };
      function handlesplice(username){
        const index = items.findIndex(item => item.username === username);
        items.splice(index, 1);
      }
      // -----
      const [search, setSearch] = useState('');

      const handleSearch = (query) => {
        const newList = user.filter(item => {
          const username = item.username.toLowerCase();
          const email = item.email.toLowerCase();
          const lowerCase = query.toLowerCase();
      
          return username.includes(lowerCase) || email.includes(lowerCase);
        });
        seItems(newList);
      };

    
      

    // const removeuser = (id) => {    
    //   const data = items => items.filter(item => item.username !== id)
    //   seItems(data);
    // };
     
      const navigate=useNavigate()

  return (
    <Container className='container_main'> 
        <Container className='userlist_heading'><h2>hello Admin</h2></Container>
        <div className='search_userdiv'><input value={search} onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
        }}className='user_searcher' placeholder='Search...'/></div>
        <div>
            <div className='users_listitem'>
            <ListGroup className='list_group' as="ol" numbered>
            {items.map((item)=>(
                <ListGroup.Item
                as="li"
                className="listitem_tag d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.firstname}</div>
                        {item.email}
                    </div>
                    <div><i onClick={()=>removeuser(item.username)} title='remove user' className="fa-solid fa-user-slash"></i></div>
                    <div><i onClick={()=>{navigate(`/userdetails/${item.username}`)}} className="fa-solid fa-circle-info"></i></div>
                </ListGroup.Item>
            ))}
            </ListGroup>
            </div>
        </div>
    </Container>
  )
}

export default Adminuserslist