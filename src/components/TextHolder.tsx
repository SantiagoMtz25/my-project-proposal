import React, { useState } from 'react';

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
        <div>
            <p>{textArray[currentIndex]}</p>
            <button id='b1' onClick={handlePrev}>Volver</button>
            <button id='b1' onClick={handleNext}>Siguiente</button>
        </div>
    );
};

export default TextHolder;
