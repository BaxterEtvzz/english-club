import React from 'react';

export default function SectionTitle({ children, className = '' }) {
    return (
        <h2 className={`text-3xl md:text-3xl font-oswald text-center uppercase mb-4 ${className}`}>
            {children}
        </h2>
    );
}
