import React, { useState } from 'react';
import { GlobalProvider, useGlobalState } from './context/GlobalState'; 
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import GlobalStyle from './GlobalStyles';

const AppContent = () => {
  const { theme } = useGlobalState(); 
  const [activeTab, setActiveTab] = useState('characters');

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header setActiveTab={setActiveTab} />
      {activeTab === 'characters' ? <CharacterList /> : <EpisodeList />}
    </>
  );
};

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
