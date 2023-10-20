import React from 'react';

type ButtonProps = {
    label: 'Yes' | 'No';
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
