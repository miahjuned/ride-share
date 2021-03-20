import React from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, Row } from 'react-bootstrap';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import './Destination.css';
import Map from '../../images/Map.png';

const Destination = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Form> 
                        <FormGroup>
                            <FormCheckLabel>Pick From: </FormCheckLabel>
                            <FormControl type="text" placeholder="Place Name"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormCheckLabel>Pick To: </FormCheckLabel>
                            <FormControl type="text" placeholder="Place Name"></FormControl>
                        </FormGroup>
                        <Button variant="primary" type="submit" block>Search</Button> 
                    </Form>
                </Col>

                <Col md={8}>
                    <img width={800}  src={Map} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;