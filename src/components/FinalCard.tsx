import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'; // Import the react-confetti library
import Button from './Button';
import { useWindowSize } from 'react-use'; // react-use library to get window size for confetti
import SpecialPhrase from './SpecialPhrase';
import phrasesProposal from '../proposal.json';


interface FinalCardProps {
    text: string;
}

const FinalCard: React.FC<FinalCardProps> = ({ text }) => {
    const { width, height } = useWindowSize(); // Get the size of the window
    const [showConfetti, setShowConfetti] = useState(false); // State to control the display of confetti and the special phrase
    const [showFirstPhrase, setShowFirstPhrase] = useState(false);
    const [showSecondPhrase, setShowSecondPhrase] = useState(false);
    
    const handleYesClick = () => {
        setShowConfetti(true); // Show confetti and the special phrase
    };

    const handleNoClick = () => {
        setShowConfetti(false); // Hide confetti and the special phrase
    };

    useEffect(() => {
        let firstTimer: NodeJS.Timeout;
        let secondTimer: NodeJS.Timeout;

        if (showConfetti) {
            firstTimer = setTimeout(() => {
                setShowFirstPhrase(true);
            }, 3000); // Wait 3 seconds to show the first phrase

            secondTimer = setTimeout(() => {
                setShowSecondPhrase(true);
            }, 6000); // Wait an additional 3 seconds to show the second phrase
        }

        // Clean up the timers if the component is unmounted or if showConfetti changes to prevent memory leaks
        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
        };
    }, [showConfetti]); // Depend on showConfetti so the effect is run when it changes


    return (
        <>
            {showConfetti && (
                <div className="confetti-overlay">
                    <Confetti width={width} height={height} numberOfPieces={450} />
                </div>
            )}
            <div className="final-card-container">
                {showConfetti ? (
                    <div className="special-phrase-container">
                        {showFirstPhrase && <SpecialPhrase phrase={phrasesProposal.acceptphrase} />}
                        {showSecondPhrase && <SpecialPhrase phrase={phrasesProposal.deque} />}
                    </div>
                ) : (
                    <>
                        <p>{text}</p>
                        <div id="button-container">
                            <Button label='Si' onClick={handleYesClick} />
                            <Button label='No' onClick={handleNoClick} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default FinalCard;
