import { MainScreenProps } from "../App.types";
import { NavLink } from "react-router-dom";

const MainScreen: React.FC<MainScreenProps> = ({ title }) => {
  return (
      <div className='container'>
      <div className='main'>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
      <img src="" alt='Undecided main screen image'/>
      <div className='start-button'>
      <NavLink to='/character-select'><h2>Start Game</h2></NavLink>
      </div>
      <NavLink to='/leaderboards'><button>Leaderboards</button></NavLink>
      <NavLink to='/controls'><button>Controls</button></NavLink>
      <NavLink to='/settings'><button>Settings</button></NavLink>
      </main>
      </div>
         <div className="footer">
          <footer>
            <p>© 2024 Group E Untitled Game</p>
          </footer>
        </div>
      </div>
    
  );
};

export default MainScreen;
