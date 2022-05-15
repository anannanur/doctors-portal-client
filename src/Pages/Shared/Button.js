import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-primary to-secondary border-none text-white fw-bold">{children}</button>
        </div>
    );
};

export default Button;