import React from 'react';
import useServices from '../hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <h3>{services.length}</h3>
        </div>
    );
};

export default Services;