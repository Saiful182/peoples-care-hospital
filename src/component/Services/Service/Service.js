import React, { createContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = (props) => {

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

                <Link className="btn btn-outline-info" to={`/selected/${id}`}>See More Facilities</Link>

            </Card>
        </Col>

    );
};

export default Service;