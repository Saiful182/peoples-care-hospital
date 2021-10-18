import React from 'react';
import useServices from '../hooks/useServices';

import Banner from './Banner/Banner';
import HomeService from './Service/HomeService';
import './Home.css';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [services] = useServices();

    const sixServices = services.slice(0, 6);

    console.log(sixServices.length);
    return (
        <div>

            <Banner></Banner>
            <div>
                <Row xs={1} md={2} lg={3}>
                    {
                        sixServices.map(service =>
                            <HomeService service={service} id={service.id}></HomeService>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;