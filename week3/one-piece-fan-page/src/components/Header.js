import React from 'react';
import styled from 'styled-components';
import { useGlobalDispatch } from '../context/GlobalState';

const Header = ({ setActiveTab }) => {
  const dispatch = useGlobalDispatch();

  return (
    <HeaderContainer>
      <h1>One Piece Fan Page</h1>
      <nav>
        <NavLink onClick={() => setActiveTab('characters')}>Characters</NavLink>
        <NavLink onClick={() => setActiveTab('episodes')}>Episodes</NavLink>
      </nav>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: red; /* Ensure the header color is red */
  color: #fff;
  padding: 1em;
  text-align: center;
`;

const NavLink = styled.a`
  margin: 0 1em;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

export default Header;
