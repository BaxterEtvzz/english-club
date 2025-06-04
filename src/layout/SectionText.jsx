import React from 'react';

export default function SectionText({ children, className = '' }) {
    return (
        <h2 className={`text-center text-2xl font-bold mb-6 font-dosis ${className}`}>
            {children}
        </h2>
    );
}
