import React from 'react';


import Banner from './Banner/Banner';
import HomeFecility from './Fecility/HomeFecility';
import './Home.css';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SixServices from './SixServices/SixServices';

import useServices from '../hooks/useServices';
import useFecilities from '../hooks/useFacilities';

const Home = () => {
    const [fecilities] = useFecilities();
    const threeFecilities = fecilities.slice(0, 3);

    const [services] = useServices();
    const sixServices = services.slice(0, 6);

    return (
        <div>

            <Banner></Banner>
            <div className="home-service-container">
                <h3 className="services-link">Our Top Services</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        sixServices.map(service =>
                            <SixServices service={service} key={service.id}></SixServices>)
                    }
                </Row>

            </div>
            <div className="home-facility-container">
                <h3 className="facilities-link">Our Others Facilities I You May Like To Cheak</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        threeFecilities.map(fecility =>
                            <HomeFecility fecility={fecility} key={fecility.id}></HomeFecility>
                        )
                    }
                </Row>

                <h4 className="facilities-link "> <Link className="btn btn-outline-info" to="/othersfecilities">See More Facilities</Link></h4>
            </div>
        </div>
    );
};

export default Home;