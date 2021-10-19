import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Consultant = (props) => {
    const { user } = useFirebase();
    const { name, img, position, degree, visitTime, chamber } = props.doctor;
    return (
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
                {
                    user.email ? <Link className="btn btn-outline-info" to="/success">Set Appoinment</Link> : <Link className="btn btn-outline-info" to="/login">Set Appoinment</Link>
                }
            </Card>
        </Col>
    );
};

export default Consultant;