import React from 'react';
import useServices from '../hooks/useServices';

import Banner from './Banner/Banner';
import HomeService from './Service/HomeService';

const Home = () => {
    const [services] = useServices();

    const sixServices = services.slice(0, 6);

    console.log(sixServices.length);
    return (
        <div>
            <Banner></Banner>
            <div className="">
                {
                    sixServices.map(service =>
                        <HomeService service={service} id={service.id}></HomeService>
                    )
                }
            </div>
        </div>
    );
};

export default Home;