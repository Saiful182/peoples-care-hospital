import React from 'react';
import { Row } from 'react-bootstrap';
import useDepartments from '../hooks/useServices';
import Service from './Service/Service';
import './Services.css';


const Services = () => {
    const [departments] = useDepartments();
    return (

        <div className="department-container">
            <Row xs={1} md={2} lg={3} className="g-4">{
                departments.map(department =>
                    <Service department={department} key={department.key}></Service>
                )};
            </Row>
        </div>
    );

};

export default Services;