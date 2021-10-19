import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeFecility.css'


const HomeFecility = (props) => {
    let { id, name, img, Room, description, stuff } = props.fecility;
    console.log(name);
    return (

        <Col>
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
        </Col>



    );
};

export default HomeFecility;