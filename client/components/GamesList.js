import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const GamesList = ({ gameList }) => {
  return (
    <div>
      <Link className="createLink" to="/games/create">
        Create
      </Link>
      {gameList.map((game) => (
        <Link key={game.id} to={`/games/${game.id}`}>
          <div className="game" >
            <h3>{game.title}</h3>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

const stateProp = (state) => ({ gameList: state.gameList });

export default connect(stateProp)(GamesList);
