import React, { useEffect, useState } from 'react';
import { useGlobalState, useGlobalDispatch } from '../context/GlobalState';
import Episode from './Episode';
import styled from 'styled-components';

const EpisodeList = () => {
  const { episodes } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetch('/episodes.json')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_EPISODES', payload: data }))
      .catch((error) => console.error('Error fetching episodes:', error));
  }, [dispatch]);

  return (
    <EpisodesContainer>
      <h2>Episodes List</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Episodes
      </button>
      {visible && episodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </EpisodesContainer>
  );
};

const EpisodesContainer = styled.section`
  margin: 2em;
  padding: 2em;
  background-color: ${(props) => props.theme === 'light' ? '#fff' : '#444'};
  border-radius: 10px;
`;

export default EpisodeList;
