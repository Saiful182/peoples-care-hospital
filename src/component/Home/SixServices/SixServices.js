import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SixServices.css'

const SixServices = (props) => {
    let { id, name, img, totalDr, description, departmentHead } = props.service;

    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Department Head:  {departmentHead}
                    </Card.Text>
                    <Card.Text>
                        Availabe Doctor: {totalDr}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Link className="btn btn-outline-info" to={`/selected/${id}`}>More Information</Link>
            </Card>
        </Col>
    );
};

export default SixServices;