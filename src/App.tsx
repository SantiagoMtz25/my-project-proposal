import { useState } from 'react';
import styles from './App.module.scss';
import Button from './components/Button';
import TextHolder from './components/TextHolder';
import phrasesProposal from './proposal.json';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        // Pop up a screen with an animation of confetti at the background
    
    }

    return (
        <div>
            <TextHolder textArray={phrasesProposal.phrases}></TextHolder>

        </div>
    )
}

export default App;
