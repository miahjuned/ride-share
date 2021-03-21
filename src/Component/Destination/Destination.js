import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, Row } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import './Destination.css';
import Map from '../../images/Map.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import Data from '../Data/DATA.json';
import manIcon from '../../images/peopleicon.png';
import { Link } from 'react-router-dom';


const Destination = () => {
    
    const [form, setForm] = useState(true);
    const {rideServiceId} =useParams();
    const [info, setInfo] = useState({});
    useEffect(() =>{
        setInfo(Data)
    }, [])
    const rideService = Data.find(ride => ride.name == rideServiceId);


    const [date, setDate] = useState(new Date());
    const calendarDate = date => {
        setDate(date);
    }

    const [pickFrom, setPickFrom] = useState('');
    const handlePickSearch = (e) => {
        setPickFrom(e.target.value)
    }
    const [toFrom, setToFrom] = useState('');
    const handleToSearch = (e) => {
        setToFrom(e.target.value)
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col md={4}>
                    
                    {
                        form ?<Form className="destination_Container p-4"> 
                            <Calendar className="calender" onChange={calendarDate}  value={date}></Calendar>
                                <FormGroup>
                                <FormCheckLabel><strong className="text-info"> Pick From: </strong> </FormCheckLabel>
                                <FormControl onBlur={handlePickSearch} name="pickFrom" type="text" placeholder="Type Pick Place Name"></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <FormCheckLabel><strong className="text-info"> Pick To:</strong> </FormCheckLabel>
                                <FormControl onBlur={handleToSearch} name="pickTo" type="text" placeholder="Type To Place Name"></FormControl>
                            </FormGroup>
                            <Button onClick={() => setForm(false)} variant="info" type="submit" block>Search</Button> 
                        </Form>
                        : 
                        <div className="destination_Container p-2">
                            <div className="destination_Header d-flex">
                                <Col md={2}>
                                    <FontAwesomeIcon className="icon" icon={faRoute} />
                                </Col>
                                <Col md={10}>
                                    <h2>{pickFrom} To</h2>
                                    <h2>{toFrom}</h2>
                                </Col>
                            </div>
                            <div className="destination_Body">
                                <p ><strong className="text-info"> Date:</strong> {date.toString()}</p>
                                <p>
                                    <img className="cardImg" src={rideService.image} alt=""/> 
                                    {rideService.name} 
                                    <img className="manIcon" src={manIcon} alt=""/> 
                                    <strong>4</strong> 
                                    <strong className="price">$64</strong>
                                    
                                </p>
                                <p>
                                    <img className="cardImg" src={rideService.image} alt=""/> 
                                    {rideService.name} 
                                    <img className="manIcon" src={manIcon} alt=""/> 
                                    <strong>4</strong> 
                                    <strong className="price">$64</strong>
                                    
                                </p>
                                <p>
                                    <img className="cardImg" src={rideService.image} alt=""/> 
                                    {rideService.name} 
                                    <img className="manIcon" src={manIcon} alt=""/> 
                                    <strong>4</strong> 
                                    <strong className="price">$64</strong>
                                    
                                </p>
                            </div>
                        </div>
                    }
                </Col>

                <Col md={8}>
                    <img width={800}  src={Map} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;