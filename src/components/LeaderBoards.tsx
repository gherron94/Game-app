// import { useEffect, useState } from "react";
import { LeaderBoardsProps } from "../App.types";
import { NavLink } from "react-router-dom";

// interface Leaders {
//   playerName: string,
//   score: string,
//   rank: number;
// };

const LeaderBoards: React.FC<LeaderBoardsProps> = ({title}) => {

  // const [leaders, setLeaders] = useState<Leaders[]>([])

  return (
    <>
      <h1>{title}</h1>
    <NavLink to='/'><button>Back to Main screen</button></NavLink>
    </>
  )

} 

export default LeaderBoards;



