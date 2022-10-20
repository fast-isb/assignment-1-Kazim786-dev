
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';  // for changing the jsx pages

import 'bootstrap/dist/css/bootstrap.min.css';
//add some bootsrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';

export const DisplayRestaurant = () => {

    const [resdata, setResdata] = useState([])
    const [refNo, setRefNo] = useState('')

    useEffect(()=>{
        const fetchAllRestaurants = async()=>{
            try{
                const res = await axios.get("http://localhost:3001/admin/restaurant");
                setResdata(res.data);
            }
            catch(err){
                console.log("Error in displaying the restaurants. "+err)
            }
        }
        fetchAllRestaurants()
    },[]
    )

    const handleDelete = async(id) => {
        try {
            await axios.delete("http://localhost:3001/admin/restaurant/"+id)
            window.location.reload()
        } catch (error) {
            
        }
    }

    const handleChange = (e)=>{
        setRefNo(e.target.value)
    }
    
    return (
        <div>
            <div className='FindResByRefNo'>
                    <input type="text" placeholder='Reference No.' onChange={handleChange} name="refNo"/>
                    <button><Link to={`/${refNo}`}>Find</Link></button>
            </div>
            <Carousel variant='light' className='w-50' style={{margin: 'auto'}}>
                    {resdata.map( (rest)=>(
                        <Carousel.Item key={rest._id} interval={1200}>
                            <img className="d-block w-100" src={rest.restImg} alt="Not available"/>
                            <Carousel.Caption>
                                <h3>{rest.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                
            </Carousel>
            <div style={{margin: '3%'}}>
                <h1>All Restaurants</h1>
            </div>
            
            <Row xs={1} md={3} className="g-4">
                    {resdata.map((rest) => (
                        <Col key={rest._id}>
                            <Card>
                                <Card.Img variant="top" src={rest.restImg} alt="No image or network error" />
                                <Card.Body>
                                    <Card.Title>{rest.name}</Card.Title>
                                    <Card.Text>
                                        {rest.location.City}<br></br>
                                        {rest.location.street}<br></br>
                                        {rest.location.zipcode}<br></br>
                                        {rest.refNo}<br></br>
                                        {rest.dateCreated.date}  {rest.dateCreated.time}
                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" style={{margin:'5%'}}>
                                            <Link to={`/update/${rest._id}`}   
                                                style={{color: 'inherit' , textDecoration:'none'}} >Update
                                            </Link>
                                    </Button>
                                    <Button style={{margin:'5%'}} variant="danger" onClick={()=>handleDelete(rest._id)}>
                                        Delete
                                    </Button>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
            <div style={{margin:'3%'}}>
                <Button variant="outline-primary"><Link to={'/add'} style={{textDecoration:'none', color:"inherit"}}>Add New Restaurant</Link></Button>{' '}
            </div>    
            
    </div>
        
    );
}




