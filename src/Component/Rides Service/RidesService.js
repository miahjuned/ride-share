import React from 'react';
import {Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RidesService.css';

const RidesService = (props) => {
    const {id, name, image} = props.RidesService;
    return (
        <Col md={6} lg={3} sm={6} xl={3} xs={12} className=" mt-5 pt-5">
            <Link className=" btn btn-info service_contaiter" to={`/destination/${id}`}>
                <img src={image} alt=""/>
                <h2>{name}</h2>
            </Link>
        </Col>
    );
};

export default RidesService;