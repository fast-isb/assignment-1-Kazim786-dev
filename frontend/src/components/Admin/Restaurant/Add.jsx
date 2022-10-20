import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



export const AddRestaurant = () => {
    const [rest, setRest] = useState({
        name: "",
        restImg: "",
        city: "",
        street: "",
        zipcode: null,

    })

    const handleChange = (e) => {
        setRest((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            //prevents further propagation of the current event in the capturing and bubbling phases
            //Propagation means bubbling up to parent elements
            event.stopPropagation();
        }
        else {
            try {
                await axios.post("http://localhost:3001/admin/restaurant", rest)
                navigate('/admin/restaurant')
            } catch (error) {
                console.log(`Error in creating the new restaurant  ==>  ${error}`)
            }
        }
        setValidated(true);
    };

    return (
        <span className="square border bg-info rounded border-danger" id="form" >
            <h2>Add Restaurant</h2><br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row >
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Restaurant name</Form.Label>
                        <Form.Control required type="text" placeholder="Restaurant name" onChange={handleChange} name="name" />
                        <Form.Control.Feedback type="invalid">Please provide a valid Restaurant name</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row >
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control required type="text" placeholder="Paste Url here" onChange={handleChange} name="restImg" />
                        <Form.Control.Feedback type="invalid">Please provide a valid Url</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row >
                    <Form.Group as={Col} md="8" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" onChange={handleChange} name="city" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="number" placeholder="Zip" onChange={handleChange} name="zipcode" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row >
                    <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required onChange={handleChange} name="street" />
                        <Form.Control.Feedback type="invalid">
                            Please add some specific address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button type="submit">Save</Button>

            </Form>
        </span>
    )
}
