import './App.css'
import { Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen'
import Settings from './components/Settings'
import LeaderBoards from './components/LeaderBoards';
import Controls from './components/Controls';
import CharacterSelect from './components/CharacterSelect';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen title='Untitled Game'/>} />
        <Route path="/settings" element={<Settings title = 'Game Settings'/>} />
        <Route path="/leaderboards" element={<LeaderBoards title = 'Leaderboards'/>} />
        <Route path="/controls" element={<Controls title = 'Controls'/>} />
        <Route path="/character-select" element={<CharacterSelect title = 'Select Character'/>} />
      </Routes>
    </>
  );
};

export default App;
