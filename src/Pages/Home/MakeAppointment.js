import React from 'react';
import Button from '../Shared/Button';
import img from './../../assets/images/doctor-small.png';
import appointment from './../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center px-28 mt-10'>
            <div className='flex-1 text-right  hidden lg:block'>
                <img src={img} alt="" className="mr-0 mt-[-100px]" style={{width:"606px", height: '550px'}}/>
            </div>
            <div className='flex-1 mt-14'>
                <h3 className='text-xl text-primary mb-2'>Appointment</h3>
                <h1 className='text-4xl text-white mb-3'>Make an appointment Today</h1>
                <p className='text-white mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;