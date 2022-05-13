import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../assets/icons/clock.svg';
import marker from './../../assets/icons/marker.svg';
import phone from './../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-28'>
            <InfoCard img={clock} bgColor="bg-gradient-to-r from-primary to-secondary" cardTitle="Opening Hours" desc="Lorem Ipsum is simply dummy"/>
            <InfoCard img={marker} bgColor="bg-accent" cardTitle="Visit our location" desc="Brooklyn, NY 10036, United States"/>
            <InfoCard img={phone} bgColor="bg-gradient-to-r from-primary to-secondary" cardTitle="Contact us now" desc="+000 123 456789"/>
        </div>
    );
};

export default Info;