import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, id, img, description, stuff, Room } = props.service;
    return (


        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Room no: {Room}
                    </Card.Text>

                    <Card.Text>
                        No of stuff:{stuff}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>


    );
};

export default Service;