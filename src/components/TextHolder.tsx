import React, { useState } from 'react';
import TextHolder_module from './TextHolder.module.scss';

interface TextHolderProps {
    textArray: string[];
}

const TextHolder: React.FC<TextHolderProps> = ({ textArray }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? textArray.length - 1 : prevIndex - 1
        );
    };

    return (
        <div id='bdiv' className="divstyle">
            <p>{textArray[currentIndex]}</p>
            <div id='button-container'>
                <button id='b1' onClick={handlePrev}>Volver</button>
                <button id='b1' onClick={handleNext}>Siguiente</button>
            </div>
        </div>
    );
};

export default TextHolder;
