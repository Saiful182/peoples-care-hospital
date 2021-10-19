import React from 'react';
import image from '../../tiff.gif'

const Success = () => {
    return (
        <div style={{ "margin": "60px", "textAlign": "center" }}>
            <h3>You Have Succesfully Set an Appoinment </h3>

            <img src={image} alt="" />
        </div>
    )

}

export default Success;