import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  characters: [],
  episodes: [],
  theme: 'light',
};

const GlobalStateContext = createContext(initialState);
const GlobalDispatchContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'SET_EPISODES':
      return { ...state, episodes: action.payload };
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'blue' : 'light' };
      
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
