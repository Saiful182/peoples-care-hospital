import React from 'react';
import useServices from '../hooks/useServices';

import Banner from './Banner/Banner';
import HomeService from './Service/HomeService';
import './Home.css';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SixDepartment from './SixDepartment/SixDepartment';
import useDepartments from '../hooks/useDepartment';

const Home = () => {
    const [services] = useServices();
    const threeServices = services.slice(0, 3);

    const [departments] = useDepartments();
    const sixDepartments = departments.slice(0, 6);

    return (
        <div>

            <Banner></Banner>
            <div className="home-department-container">
                <h3 className="services-link">Our Top Departments</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        sixDepartments.map(department =>
                            <SixDepartment department={department} key={department.id}></SixDepartment>)
                    }
                </Row>

            </div>
            <div className="home-service-container">
                <h3 className="services-link">Our Services I You Like To Cheak</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        threeServices.map(service =>
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