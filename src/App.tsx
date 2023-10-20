import { useState } from 'react';
import styles from './App.module.scss';
import Button from './components/Button';
import TextHolder from './components/TextHolder';
import phrasesProposal from './proposal.json';

function App() {
    const [index, setIndex] = useState(0);

    return (
        <div id='main-div'>
            <TextHolder textArray={phrasesProposal.phrases}></TextHolder>

        </div>
    )
}

export default App;
