import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeDoctors = (props) => {
    const { name, img, position, degree, visitTime, chamber } = props.doctor;
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Degree: {degree}
                        </Card.Text>
                        <Card.Text>
                            Position: {position}
                        </Card.Text>
                        <Card.Text>
                            Chamber: {chamber}
                        </Card.Text>
                        <Card.Text>
                            Visti Time: {visitTime}
                        </Card.Text>


                    </Card.Body>

                </Card>
            </Col>

        </div>
    );
};

export default HomeDoctors;