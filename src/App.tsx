import React, { useState } from 'react';
import TextHolder from './components/TextHolder';
import FinalCard from './components/FinalCard';
import phrasesProposal from './proposal.json';
import Button from './components/Button';

function App() {
    const totalPhrases = phrasesProposal.phrasecount;
    const [index, setIndex] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const isLastPhrase = index === totalPhrases;

    const handleNext = () => {
        setIndex(prevIndex => prevIndex < totalPhrases ? prevIndex + 1 : prevIndex);
    };

    const handlePrev = () => {
        setIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex)
    };

    const startContent = () => {
        setShowContent(true);
    };

        return (
            <div id='main-div'>
                {showContent ? (
                    isLastPhrase ? (
                        <FinalCard text={phrasesProposal.finalphrase} />
                    ) : (
                        <TextHolder textArray={phrasesProposal.phrases} onNext={handleNext} currentIndex={index} onPrev={handlePrev} />
                    )
                ) : (
                    <Button label='Empezar' onClick={startContent} />
                )}
            </div>
        );
    }

    export default App;
