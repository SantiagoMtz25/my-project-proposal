import React from 'react';

interface TextHolderProps {
    textArray: string[];
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
}

const TextHolder: React.FC<TextHolderProps> = ({ textArray, currentIndex, onNext, onPrev }) => {
    // handleNext is now using the onNext prop from the parent component
    const handleNext = () => {
        onNext();
    };

    const handlePrev = () => {
        // Your existing logic for "prev" can remain here if needed
        onPrev();
    };

    return (
        <div id='bdiv' className="divstyle">
            <p>{textArray[currentIndex]}</p>
            <div id='button-container'>
                <button id='b1' onClick={handlePrev}>Atrás</button>
                <button id='b1' onClick={onNext}>Siguiente</button>
            </div>
        </div>
    );
};

export default TextHolder;
