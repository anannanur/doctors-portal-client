import React from 'react';

const Service = ({ service }) => {

    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 class="card-title text-primary text-xl justify-center font-semibold">{name}</h1>
                <p className="text-sm font-normal text-center">{slots.length ? <span >{slots[0]}</span> : <span className='text-red-600'>Try another date</span>}</p>
                <p className='text-xs text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center mt-5">
                    <button className="btn bg-gradient-to-r from-primary to-secondary border-none text-white fw-bold" disabled={slots.length === 0}>Booking Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;