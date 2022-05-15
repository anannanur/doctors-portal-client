import React from 'react';
import quote from './../../assets/icons/quote.svg';
import people1 from './../../assets/images/people1.png';
import people2 from './../../assets/images/people2.png';
import people3 from './../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            location: 'California',
            img: people1,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 2,
            name: "Winson Herry",
            location: 'California',
            img: people2,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 3,
            name: "Winson Herry",
            location: 'California',
            img: people3,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <section className='py-20 px-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24  lg:w-48'/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                    reviews.map(review =><Testimonial
                    key={review._id}
                    review={review}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;