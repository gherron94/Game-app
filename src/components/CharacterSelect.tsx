import { useState } from "react";
import { CharacterProps } from "../App.types";
import { NavLink } from "react-router-dom";

const CharacterSelect: React.FC<CharacterProps> = ({title}) => {

  const [isChar1, setIsChar1] = useState(true)
  const [isChar2, setIsChar2] = useState(false)
  const [isChar3, setIsChar3] = useState(false)

  interface Stats {
    health: number,
    attack: number,
    defence: number,
    speed: number
  }
  
  const char1: Stats = {
    health: 125,
    attack: 50,
    defence: 50,
    speed: 20
  }

  const char2: Stats = {
    health: 150,
    attack: 25,
    defence: 75,
    speed: 15
  }

  const char3: Stats = {
    health: 100,
    attack: 75,
    defence: 50,
    speed: 30
  }

  function previousChar() {
    if (isChar1) {
      setIsChar3(true)
      setIsChar1(false)
    }
    if (isChar2) {
      setIsChar1(true)
      setIsChar2(false)
    }
    if (isChar3) {
      setIsChar2(true)
      setIsChar3(false)
    }
  }

  function nextChar() {
    if (isChar1) {
      setIsChar2(true)
      setIsChar1(false)
    }
    if (isChar2) {
      setIsChar3(true)
      setIsChar2(false)
    }
    if (isChar3) {
      setIsChar1(true)
      setIsChar3(false)
    }
  }

  return (
    <>
     <header>
      <div className="select-char-header">
      <h1>{title}</h1>
      <div className="back-button"><NavLink to='/'><button>Back to Main screen</button></NavLink></div>
        </div>
    </header> 
    <main>
      <div className="char-box">
        <div className="stats">
          <div>
            <h3> Stats</h3>
          </div>
          <div className="stats-box">
            { isChar1? <ul>
              <li> Health: {char1.health}</li>
              <li> Attack: {char1.attack}</li>
              <li> Defence: {char1.defence}</li>
              <li> Speed: {char1.speed}</li>
            </ul> : null }
            { isChar2? <ul>
              <li> Health: {char2.health}</li>
              <li> Attack: {char2.attack}</li>
              <li> Defence: {char2.defence}</li>
              <li> Speed: {char2.speed}</li>
            </ul> : null }
            { isChar3? <ul>
              <li> Health: {char3.health}</li>
              <li> Attack: {char3.attack}</li>
              <li> Defence: {char3.defence}</li>
              <li> Speed: {char3.speed}</li>
            </ul> : null }
          </div>
        </div>
        <div className="char-name-and-char">
          <div className="char-name">
            {isChar1 ? <h2>Character Name 1</h2>: null}
            {isChar2 ? <h2>Character Name 2</h2>: null}
            {isChar3 ? <h2>Character Name 3</h2>: null}
          </div>
          <div className="char">
            <div className="left-select"><button onClick={previousChar}>⬅︎</button></div>
            <div className="current-select">
              {isChar1 ? <div className="char1">Character 1 </div> : null}
              {isChar2 ? <div className="char2">Character 2</div> : null }
              {isChar3 ? <div className="char3">Character 3</div> : null }
            </div>
            <div className="right-select"><button onClick={nextChar}>➡</button></div>
           </div>
         </div>
        </div>
        <div className='start-button'>
          <h2>Play Game</h2>
        </div>
    </main>
    </>
  )

} 

export default CharacterSelect;  





