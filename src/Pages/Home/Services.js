import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        }
    ]
    return (
        <div className='mt-28 mb-12 px-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl uppercase font-bold'>Our Services</h3>
                <h1 className='text-4xl font-normal'>Services We Provide</h1>
            </div>
            <div className='grid mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;