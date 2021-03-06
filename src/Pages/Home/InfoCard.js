
import React from 'react';

const InfoCard = ({img,cardTitle,desc,bgColor}) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl text-white ${bgColor}`}>
                <figure className='lg:pl-5 pt-7 lg:pt-0'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;