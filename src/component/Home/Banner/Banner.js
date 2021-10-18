import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import Banner1 from '../../../Images/young-handsome-physician-medical-robe-with-stethoscope-min.jpg';
import Banner2 from '../../../Images/close-up-doctor-kid-wearing-masks-min.jpg';
import Banner3 from '../../../Images/zhen-hu-Xruf17OrkwM-unsplash-min.jpg';


const Banner = () => {
    return (
        <div >

            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img "
                        src={Banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={Banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;