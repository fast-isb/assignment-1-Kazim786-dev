
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function DisplayRestaurants(props) {

    const navigate = useNavigate() 
    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete("http://localhost:3001/admin/restaurant/" + id)
    //         navigate('/admin/restaurant')
    //     } catch (error) {

    //     }
    // }
    
    return (
        <Card>
            <Card.Img variant="top" src={props.rest.restImg} alt="No image or network error" />
            <Card.Body>
                <Card.Title>{props.rest.name}</Card.Title>
                <Card.Text>
                    {props.rest.location.City}<br></br>
                    {props.rest.location.street}<br></br>
                    {props.rest.location.zipcode}<br></br>
                    {props.rest.refNo}<br></br>
                    {props.rest.dateCreated.date}  {props.rest.dateCreated.time}
                </Card.Text>
                <Card.Footer>
                    <Button variant="secondary" style={{ margin: '5%' }}>
                        <Link to={`/admin/restaurant/update/${props.rest._id}`}
                            style={{ color: 'inherit', textDecoration: 'none' }} >Update
                        </Link>
                    </Button>
                    <Button style={{ margin: '5%' }} variant="danger" onClick={() => props.handleDelete(props.rest._id) }>
                        Delete
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default DisplayRestaurants;