import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../hooks/useDoctors';
import Consultant from './Consultant/Consultant';

const Consultants = () => {
    const [doctors] = useDoctors();
    return (
        <div>
            <Row xs={1} md={3} lg={4} w className="g-4">{

                doctors.map(doctor => <Consultant doctor={doctor} key={doctor.key}></Consultant>)}
            </Row>

        </div>
    );
}

export default Consultants;