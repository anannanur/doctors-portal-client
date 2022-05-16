import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {

    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState({});

    useEffect(()=>{
        fetch("http://localhost:5000/service")
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='py-20'>
            <h1 className='text-center text-primary fw-bold text-2xl'>Available appointments on : {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-14'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}></Service>)
                   
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}/>}
        </div>
    );
};

export default AvailableAppointments;