import React from 'react';
import Button from './Button';
import jsonData from '../proposal.json';

interface FinalCardProps {
    index: number;
}

const FinalCard: React.FC<FinalCardProps> = ({ index }) => {
    const { text } = JSON.parse(JSON.stringify(jsonData)).phrases[index];

    const handleButtonClick = () => {
        // Will display a message depending on which button was clicked
    }

    return (
        <div className="card">
            <p>{text}</p>
            <div className="button-container">
                <Button label='Si' onClick={handleButtonClick}></Button>
                <Button label='No' onClick={handleButtonClick}></Button>
            </div>
        </div>
    );
};

export default FinalCard;
