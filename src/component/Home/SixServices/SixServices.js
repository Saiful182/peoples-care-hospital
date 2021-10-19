import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SixServices.css'

const SixServices = (props) => {
    let { name, img, totalDr, description, departmentHead } = props.service;

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
            </Card>
        </Col>
    );
};

export default SixServices;