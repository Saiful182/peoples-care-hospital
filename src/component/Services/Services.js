import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import Service from './Service/Service';
import './Services.css';


const Services = () => {
    const [services] = useServices();

    return (

        <div className="service-container">
            <Row xs={1} md={2} lg={3} className="g-4">{
                services.map(service =>
                    <Service service={service} key={service.id}></Service>
                )};
            </Row>
        </div>
    );

};

export default Services;