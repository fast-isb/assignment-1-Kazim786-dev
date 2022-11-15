
import React, { useState, useEffect } from 'react';
 import axios from 'axios';
import { Link } from 'react-router-dom'
// import AdminNavbar from '../navbar.jsx'
import RestaurantCard from './DisplayResCard'

// import 'bootstrap/dist/css/bootstrap.min.css';
//add some bootsrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import AllImageSlider from './carousel.jsx'
import Form from 'react-bootstrap/Form';

export const DisplayRestaurant = () => {

    const [resdata, setResdata] = useState([])
    const [refNo, setRefNo] = useState('')
    
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                //const res = await axios.get("http://localhost:3001/admin/restaurant");
            
                const res=null;  // remove it when comment out above line
                setResdata(res.data);
            }
            catch (err) {
                console.log("Error in displaying the restaurants. " + err)
            }
        }
        fetchAllRestaurants()
    }, []
    )
    
    const handleChange = (e) => {
        setRefNo(e.target.value)
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:3001/admin/restaurant/" + id)
            const res = await axios.get("http://localhost:3001/admin/restaurant");
            setResdata(res.data);
            alert("Restaurant Deleted Successfully!")
            //navigate('/admin/restaurant')
            // window.location.reload()
        } catch (error) {

        }
    }

    return (
       
        <div>
                {/* <AdminNavbar/> */}
            
            <div>
                <Form className="d-flex" style={{ width: '25%', margin: '2%' }}>
                    <Form.Control type="search" onChange={handleChange} name="refNo" placeholder="Find by Reference No." className="me-2" aria-label="Search" />
                    <Button variant="outline-success"><Link to={`/admin/restaurant/${refNo}`} style={{ textDecoration: 'none', color: "inherit" }}>Search</Link></Button>
                </Form>
            </div>

            <div>
                <AllImageSlider resdata={resdata} />
            </div>

            <div style={{ margin: '3%' }}>
                <h1>All Restaurants</h1>
            </div>

            <Row xs={1} md={3} className="g-4">
                {Array.isArray(resdata) && resdata.length>0 ?
                    resdata.map((rest) => (
                        
                        <Col key={rest._id}>
                            <RestaurantCard rest={rest} handleDelete={handleDelete} />
                        </Col>
                    )) 
                    : <p>No Restaurant available</p>
                }
            </Row>
            <div style={{ margin: '3%' }}>
                <Button variant="outline-primary"><Link to={'/admin/restaurant/add'} style={{ textDecoration: 'none', color: "inherit" }}>Add New Restaurant</Link></Button>{' '}
            </div>
        </div>
    );
}
