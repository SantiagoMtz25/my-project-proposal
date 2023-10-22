import React, { useState } from 'react';
import styles from './App.module.scss';
import TextHolder from './components/TextHolder';
import FinalCard from './components/FinalCard';
import phrasesProposal from './proposal.json';

function App() {
    const totalPhrases = phrasesProposal.phrasecount;
    const [index, setIndex] = useState(0);
    const isLastPhrase = index === totalPhrases;

    const handleNext = () => {
        setIndex(prevIndex => prevIndex < totalPhrases ? prevIndex + 1 : prevIndex);
    };

    const handlePrev = () => {
        setIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex)
    };

    return (
        <div id='main-div'>
            {isLastPhrase ? (
                <FinalCard index={index} text={phrasesProposal.finalphrase} />
            ) : (
                <TextHolder textArray={phrasesProposal.phrases} onNext={handleNext} currentIndex={index} onPrev={handlePrev
                } />
            )}
        </div>
    );
}

export default App;
