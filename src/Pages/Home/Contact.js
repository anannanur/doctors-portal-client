import React from 'react';
import Button from '../Shared/Button';
import bg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className="py-16">
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary'>Contact Us</h3>
                <h1 className='text-3xl text-white mb-10'>Stay Connected with Us</h1>
                <div className="form-control">
                    <label className="input-group-vertical">
                        <input type="text" placeholder="Email Address" className="w-96 input rounded input-bordered mb-5" />
                    </label>
                    <label className="input-group-vertical">
                        <input type="text" placeholder="Subject" className="w-96 input rounded input-bordered mb-5" />
                    </label>
                    <label className="input-group-vertical">
                        <textarea type="text" placeholder="Your message" className="w-96 input rounded input-bordered mb-5" />
                    </label>
                    <Button>Submit</Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
