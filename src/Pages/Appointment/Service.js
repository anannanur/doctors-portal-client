import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h1 className="card-title text-primary text-xl justify-center font-semibold">{name}</h1>
                <p className="text-sm font-normal text-center">{slots.length ? <span >{slots[0]}</span> : <span className='text-red-600'>Try another date</span>}</p>
                <p className='text-xs text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center mt-5">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)}
                        className="btn bg-gradient-to-r from-primary to-secondary border-none text-white fw-bold"
                        disabled={slots.length === 0}>Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;