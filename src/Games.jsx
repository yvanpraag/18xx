import React from "react";
import games from "./data/games";
import GameNav from "./GameNav";
import * as R from "ramda";

const Games = () => {
  let gameNodes = R.map(game => {
    return (
      <div className="game" key={`game-${game}`} id={`game-${game}`}>
        <GameNav
          game={game}
          ipo={games[game].ipo}
          minors={games[game].minorCompanies}
          paginated={!(games[game].info.paginated === false)}
          paginatedMarket={games[game].stock.paginated}
        />
      </div>
    );
  }, R.sort(R.ascend(R.identity), R.keys(games)));

  return (
    <div className="games">
      <h1>Games</h1>
      {gameNodes}
    </div>
  );
};

export default Games;
