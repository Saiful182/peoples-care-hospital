import React from 'react';
import useServices from '../hooks/useServices';

import Banner from './Banner/Banner';
import HomeService from './Service/HomeService';
import './Home.css';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SixDepartment from './SixDepartment/SixDepartment';

const Home = () => {
    const [services] = useServices();
    const sixServices = services.slice(0, 3);


    return (
        <div>

            <Banner></Banner>
            <SixDepartment></SixDepartment>
            <div className="home-service-container">
                <h3 className="services-link">Our Services I You Like To Cheak</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        sixServices.map(service =>
                            <HomeService service={service} key={service.id}></HomeService>
                        )
                    }
                </Row>

                <h4 className="services-link"><Link to="/services">See More Service</Link></h4>
            </div>
        </div>
    );
};

export default Home;