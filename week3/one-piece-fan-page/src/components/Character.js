import React from 'react';
import styled from 'styled-components';

const Character = ({ character }) => {
    return (
        <CharacterContainer>
            <h3>{character.name}</h3>
            <p>{character.email}</p>
        </CharacterContainer>
    );
};

const CharacterContainer = styled.div`
    background-color: #fff;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Character;
