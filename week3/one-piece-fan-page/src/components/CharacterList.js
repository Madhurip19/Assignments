import React, { useEffect, useState } from 'react';
import { useGlobalState, useGlobalDispatch } from '../context/GlobalState';
import Character from './Character';
import styled from 'styled-components';

const CharacterList = () => {
  const { characters } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetch('/characters.json')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_CHARACTERS', payload: data }))
      .catch((error) => console.error('Error fetching characters:', error));
  }, [dispatch]);

  return (
    <CharactersContainer>
      <h2>Characters List</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Characters
      </button>
      {visible && characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </CharactersContainer>
  );
};

const CharactersContainer = styled.section`
  margin: 2em;
  padding: 2em;
  background-color: ${(props) => props.theme === 'light' ? '#fff' : '#444'};
  border-radius: 10px;
`;

export default CharacterList;
