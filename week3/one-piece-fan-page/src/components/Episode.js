import React from 'react';
import styled from 'styled-components';

const Episode = ({ episode }) => {
    return (
        <EpisodeContainer>
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
        </EpisodeContainer>
    );
};

const EpisodeContainer = styled.div`
    background-color: #fff;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Episode;
