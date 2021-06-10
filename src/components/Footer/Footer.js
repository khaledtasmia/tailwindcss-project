import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-center items-center h-16 bg-black text-white">
            <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;