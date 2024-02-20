import React, { useEffect, useState } from "react";
import { LeaderBoardsProps } from "../App.types";
import { NavLink } from "react-router-dom";
import axios from "axios";
import BackgroundMusic from "./sounds/BackgroundMusic";

interface Leaders {
  username: string;
  score: number;
  rank: number;
  _id: string;
}

const LeaderBoards: React.FC<LeaderBoardsProps> = ({ title }) => {
  const [leaders, setLeaders] = useState<Leaders[]>([]);

  useEffect(() => {
    axios
      .get("https://game-app-backend.onrender.com/leaderboard")
      .then((response) => {
        console.log(response.data);
        setLeaders(response.data);
      })
      .catch((err) => {
        if (err) console.log("something has gone wrong");
      });
  }, []);

  return (
    <section>
      <BackgroundMusic />
      <h1>{title}</h1>
      <br />
      <table className="leaderboard-grid">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        {leaders.map(({ _id, username, score }) => {
          return (
            <React.Fragment key={_id}>
              <tbody>
                <tr>
                  <td></td>
                  <td>{username}</td>
                  <td>{score}</td>
                </tr>
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
      <NavLink to="/">
        <button>Back to Main screen</button>
      </NavLink>
    </section>
  );
};

export default LeaderBoards;
