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
                        <h5>Doctor Jobp</h5>
                        <p>Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well being.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img "
                        src={Banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Doctor–patient relationship</h5>
                        <p>The doctor–patient relationship is a central part of health care and the practice of medicine. A doctor-patient relationship is formed when a doctor attends to a patient's medical needs and is usually through consent</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={Banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Emergency department</h5>
                        <p>Emergency medical services (EMS), also known as ambulance services or paramedic services, are emergency services that provide urgent pre-hospital treatment and stabilisation for serious illness and injuries and transport to definitive care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;