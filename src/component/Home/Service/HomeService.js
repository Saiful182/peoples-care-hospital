import React from 'react';
import { Card } from 'react-bootstrap';


const HomeService = (props) => {
    let { name, img, Room, description, stuff } = props.service;
    console.log(name);
    return (

        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Room No: {Room}
                </Card.Text>
                <Card.Text>
                    Stuff deducated: {stuff}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>

            </Card.Body>

        </Card>

    );
};

export default HomeService;