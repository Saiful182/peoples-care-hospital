import React from 'react';
import './AboutUs.css';
import image1 from '../../Images/young-handsome-physician-medical-robe-with-stethoscope-min.jpg';
import image2 from '../../Images/Doctors analyzing patients disease history-min.jpg';
import image3 from '../../Images/close-up-doctor-kid-wearing-masks-min.jpg';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="content">
                <img src={image1} alt="" />
                <h2>Who We Are</h2>
                <p>Peoples Care Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Peoples Care Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.

                    LEGAL STATUS Peoples Care Centre Ltd. is a private limited company registered with the Ministry of Health & Family Welfare, People’s Republic Govt. of Bangladesh having License No. 1275 &688.</p>
            </div>
            <div className="content">
                <img src={image2} alt="" />
                <h2>Our Objective</h2>
                <p>
                    To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.
                    Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.
                    To promote Health Education & Medical Services.
                    Day care Centre for follow-up cardiac renal and oncology patients.
                    To build a full fledged specialized (Tertiary) Hospital.
                    Set up Satellite collection Centre.</p>
            </div>
            <div className="content">
                <img src={image3} alt="" />
                <h2>Our Contrbution</h2>
                <p>After the liberation war, the health sector of Bangladesh was completely deprived due to various political instability and uncertainity. Unfortunately a significant number of people of this country died on that time only because of incomplete diagnosis of disease and lack of better treatment. When the sufferings were beyond the limit, at that time we established Peoples Care Centre Ltd. in Elephant Road, Dhaka. Our goal was to ensure modern treatment facilities for the mass people of the country.

                    Peoples Carestarted its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service Peoples Carebecame an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country.</p>
            </div>

        </div>
    );
};

export default AboutUs;