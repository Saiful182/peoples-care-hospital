import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


import './selected.css';

const Selected = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([])

    const [selected, setSelected] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        const details = services.find(service => service.id == serviceId)
        setSelected(details);
    }, [services]);




    return (
        <div className="selected-container">
            <h3>{selected?.name}</h3>
            <h5>Department's Doctors :{selected?.totalDr}</h5>
            <Card.Text>
                {selected?.description}
            </Card.Text>
            {
                <Row md={1} lg={2} className="g-4">

                    <Col>
                        <Card className="selectedCard">

                            <Card.Body>
                                <Card.Title>Doctor Name :{selected?.reletedConsultant1?.name} </Card.Title>
                                <Card.Text>
                                    Position: {selected?.reletedConsultant1?.position}
                                </Card.Text>
                                <Card.Text>
                                    Degree: {selected?.reletedConsultant1?.degree}
                                </Card.Text>
                                <Card.Text>
                                    Medical History: {selected?.reletedConsultant1?.medicalHistory}
                                </Card.Text>
                                <Card.Text>
                                    Visit Time: {selected?.reletedConsultant1?.visitTime}
                                </Card.Text>
                                <Card.Text>
                                    Chamber: {selected?.reletedConsultant1?.chamber}
                                </Card.Text>
                                <Link className="btn btn-outline-info" to="/success"  >Set Appoinment</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="selectedCard">

                            <Card.Body>
                                <Card.Title>Doctor Name :{selected?.reletedConsultant2?.name} </Card.Title>
                                <Card.Text>
                                    Position: {selected?.reletedConsultant2?.position}
                                </Card.Text>
                                <Card.Text>
                                    Degree: {selected?.reletedConsultant2?.degree}
                                </Card.Text>
                                <Card.Text>
                                    Medical History: {selected?.reletedConsultant2?.medicalHistory}
                                </Card.Text>
                                <Card.Text>
                                    Visit Time: {selected?.reletedConsultant2?.visitTime}
                                </Card.Text>
                                <Card.Text>
                                    Chamber: {selected?.reletedConsultant2?.chamber}
                                </Card.Text>
                                <Link className="btn btn-outline-info" to="/success" >Set Appoinment</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="selectedCard">

                            <Card.Body>
                                <Card.Title>Doctor Name :{selected?.reletedConsultant2?.name} </Card.Title>
                                <Card.Text>
                                    Position: {selected?.reletedConsultant3?.position}
                                </Card.Text>
                                <Card.Text>
                                    Degree: {selected?.reletedConsultant3?.degree}
                                </Card.Text>
                                <Card.Text>
                                    Medical History: {selected?.reletedConsultant3?.medicalHistory}
                                </Card.Text>
                                <Card.Text>
                                    Visit Time: {selected?.reletedConsultant3?.visitTime}
                                </Card.Text>
                                <Card.Text>
                                    Chamber: {selected?.reletedConsultant3?.chamber}
                                </Card.Text>
                                <Link className="btn btn-outline-info" to="/success"  >Set Appoinment</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="selectedCard">

                            <Card.Body>
                                <Card.Title>Doctor Name :{selected?.reletedConsultant4?.name} </Card.Title>
                                <Card.Text>
                                    Position: {selected?.reletedConsultant4?.position}
                                </Card.Text>
                                <Card.Text>
                                    Degree: {selected?.reletedConsultant4?.degree}
                                </Card.Text>
                                <Card.Text>
                                    Medical History: {selected?.reletedConsultant4?.medicalHistory}
                                </Card.Text>
                                <Card.Text>
                                    Visit Time: {selected?.reletedConsultant4?.visitTime}
                                </Card.Text>
                                <Card.Text>
                                    Chamber: {selected?.reletedConsultant4?.chamber}
                                </Card.Text>
                                <Link className="btn btn-outline-info" to="/success"  >Set Appoinment</Link>

                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            }
        </div >
    );
};

export default Selected;