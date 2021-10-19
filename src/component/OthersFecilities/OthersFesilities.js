import React from 'react';
import { Row } from 'react-bootstrap';
import useFeclities from '../hooks/useFacilities';

import OtherFecility from './OtherFecility/OtherFecilty';

import './OthersFecilities.css';

const OthersFecilities = () => {
    const [fecilities] = useFeclities();

    return (

        <div className="facility-container">
            <Row xs={1} md={2} lg={3} className="g-4">{

                fecilities.map(fecility => <OtherFecility fecility={fecility} key={fecility.id}
                ></OtherFecility>

                )};

            </Row >
        </div>
    );
};

export default OthersFecilities;