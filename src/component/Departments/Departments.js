import React from 'react';
import { Row } from 'react-bootstrap';
import useDepartments from '../hooks/useDepartment';
import Department from './Department/Department';
import './Departments.css';


const Departments = () => {
    const [departments] = useDepartments();
    return (

        <div className="department-container">
            <Row xs={1} md={2} lg={3} className="g-4">{
                departments.map(department =>
                    <Department department={department} key={department.key}></Department>
                )};
            </Row>
        </div>
    );

};

export default Departments;