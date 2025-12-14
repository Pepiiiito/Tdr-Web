import React from 'react';

const Logo = ({ className = "w-8 h-8", color = "currentColor" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="8" />
        <path d="M30 50 L50 30 L70 50" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 30 V70" stroke={color} strokeWidth="8" strokeLinecap="round" />
        <circle cx="50" cy="50" r="10" fill={color} />
    </svg>
);

export default Logo;
