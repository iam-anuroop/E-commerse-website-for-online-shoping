import React from 'react'
import './Home.css'
import babyimage from './Assets/baby-store-babyimage.png'
import toysitems from './Assets/babytoys_s.jpg'
import dressitems from './Assets/babydress_s.jpg'
import careitems from './Assets/babycare_s.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar'
import { useEffect } from 'react'



function Home() {


    useEffect(() => {
        window.scrollTo(0, 0);
      });

    const navigate=useNavigate()


  return (
    <div className='body_div'>
        <Navbar/>
        <div className='most_maindiv'>
            <div className='second_maindiv container-fluid'>
                <div>
                <div className='offer_div'><i className="fa-solid fa-tag"></i><h5>FLAT 30% OFF + CASHBACK! *</h5></div>
                <div className='text_div' ><h1 className='main_heading'>Baby Essential<br/> Fashion & Nursery</h1></div>
                <div><p>jhsfjsfng kskjdfnskffnfhkhj oijsreogkjreo niujtgorietjgrem iyjt9riy54iky<br/>ojiyhjteiyhjrj lkjgoriejgo</p></div>
                <div>
                    <div className="mb-2">
                        <Button onClick={()=>{navigate('/shopall')}} className='shop_now_btn' size="lg">
                        Shop now <i className="shopnow_arrow fa-solid fa-angle-right"></i>
                        </Button>
                    </div>
                </div>
                </div>
                <div className='babyimage_div'><img alt='baby with white dress' src={babyimage}/></div>
            </div>
            <div className='third_maindiv container-fluid d-inline-flex '>
                
                <div onClick={()=>{navigate('/care')}} className='category_div1' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={careitems} />
                        <Card.Body>
                        <Card.Title >Daily cares</Card.Title>
                        <Card.Text >
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button className='texdec' variant="primary">Shop now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div onClick={()=>{navigate('/items')}} className='category_div2'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dressitems} />
                        <Card.Body>
                        <Card.Title >Baby dresses</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button onClick={()=>{navigate('/care')}}className='texdec' variant="primary">Shop now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div onClick={()=>{navigate('/toys')}} className='category_div1'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={toysitems} />
                        <Card.Body>
                        <Card.Title >Baby toys</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button onClick={()=>{navigate('/toys')}} className='texdec' variant="primary">Shop now</Button>
                        </Card.Body>
                    </Card>
                </div>
               
            </div>
        </div>    
    </div>
  )
}

export default Home