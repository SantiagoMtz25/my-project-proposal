import React from 'react';
import phrasesProposal from '../proposal.json';

const SpecialPhrase: React.FC = () => {
    return (
        <div>
            <p>{phrasesProposal.acceptphrase}</p>
        </div>
    );
};

export default SpecialPhrase;
