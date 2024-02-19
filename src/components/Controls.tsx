import { ControlsProps } from "../App.types";
import { NavLink } from "react-router-dom";

const Controls: React.FC<ControlsProps> = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="controls">
      <p>
        ⬆︎ - Jump
      </p>
      <p>
        ➡︎ - Move Left
      </p>
      <p>
        ⬇︎ - Crouch
      </p>
      <p>
        ⬅︎ - Move Left
      </p>
      <p>
        Spacebar - Use Powerup
      </p>
      </div>
      <NavLink to='/'><button>Back to Main screen</button></NavLink>
    </>
  )

} 

export default Controls;  





