import React, { useState } from 'react';
import Confetti from 'react-confetti'; // Import the react-confetti library
import Button from './Button';
import { useWindowSize } from 'react-use'; // react-use library to get window size for confetti
import SpecialPhrase from './SpecialPhrase';
import phrasesProposal from '../proposal.json';

interface FinalCardProps {
    text: string;
    index: number; // Please note, you're not using 'index' prop in this component. Consider removing it if it's not needed.
}

const FinalCard: React.FC<FinalCardProps> = ({ text }) => {
    const { width, height } = useWindowSize(); // Get the size of the window
    const [showConfetti, setShowConfetti] = useState(false); // State to control the display of confetti and the special phrase

    const handleYesClick = () => {
        setShowConfetti(true); // Show confetti and the special phrase
    };

    const handleNoClick = () => {
        setShowConfetti(false); // Hide confetti and the special phrase
    };

    return (
        <div className="final-card-container">
            {showConfetti && (
                <>
                    <Confetti width={width} height={height} numberOfPieces={450} />
                    <div className="special-phrase-container">
                        <SpecialPhrase phrase = {phrasesProposal.acceptphrase} />
                        <SpecialPhrase phrase = {phrasesProposal.deque} />
                    </div>
                </>
            )}
            <p>{text}</p>
            <div id="button-container">
                <Button label='Si' onClick={handleYesClick} />
                <Button label='No' onClick={handleNoClick} />
            </div>
        </div>
    );
};

export default FinalCard;
