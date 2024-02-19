import { SettingsProps } from "../App.types";
import { NavLink } from "react-router-dom";

const Settings: React.FC<SettingsProps> = ({title}) => {
  return (
    <>
    <h1>{title}</h1>
   <NavLink to='/'> <button>Back to Main screen</button></NavLink>
    </>
  )

} 

export default Settings;