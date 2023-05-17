import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from 'react-router-dom';
import { user } from './Datas'
import './Userdetails.css'


function Userdetails() {

    const navigate=useNavigate()
    const{paramusername}=useParams()

    const person = user.find(item => item.username === paramusername);



  return (
    <div className='div_detailmain'>
        <div className='div_detailcard'>
        <Card className='card_card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" />
            <Card.Body className='card_body'>
                <Card.Title>F.name:{person.firstname}</Card.Title>
                <Card.Title>L.name:{person.lastname}</Card.Title>
            </Card.Body>
            <ListGroup className="listgroup list-group-flush">
                <ListGroup.Item>Email:{person.email}</ListGroup.Item>
                <ListGroup.Item>Username:{person.username}</ListGroup.Item>
                <ListGroup.Item>Password:{person.password}</ListGroup.Item>
            </ListGroup>
            <Card.Body className='button_body'>
                <Button onClick={()=>{navigate("/admin")}}>Go back</Button>
            </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Userdetails