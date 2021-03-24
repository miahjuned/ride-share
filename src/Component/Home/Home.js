import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import './home.css';
import Data from '../Data/DATA.json'
import RidesService from '../Rides Service/RidesService';

const Home = () => {

    const [data , setData] = useState([]);
    // console.log(data)
    useEffect(() => {
        setData(Data);
    }, []);

    return (
        <div className="home">
           <Container className="header">
               <Row>
                {
                    data.map(Service => <RidesService RidesService={Service}></RidesService>)
                }
                   
               </Row>
           </Container>
        </div>
    );
};

export default Home;
