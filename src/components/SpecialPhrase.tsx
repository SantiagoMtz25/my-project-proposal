import React from 'react';

interface Props {
  phrase: string;
}

const SpecialPhrase: React.FC<Props> = ({ phrase }) => {
    return (
        <div>
            <p>{phrase}</p>
        </div>
    );
};

export default SpecialPhrase;
