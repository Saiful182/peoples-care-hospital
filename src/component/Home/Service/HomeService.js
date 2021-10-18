import React from 'react';


const HomeService = (props) => {
    let { name } = props.service;
    console.log(name);
    return (
        <div>
            <h1>hellow wolrd{name}</h1>
        </div>
    );
};

export default HomeService;