import React from 'react';

const Testimonial = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.desc}</p>
            </div>
            <div className='flex items-center pl-8 pb-8'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt=''/>
                    </div>
                </div>
                <div className='ml-4'>
                    <h4 className='font-bold text-accent'>{review.name}</h4>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;