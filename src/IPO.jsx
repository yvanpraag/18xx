import React from "react";
import games from "./data/games";
import * as R from "ramda";
import Color from "./data/Color";
import ColorContext from "./context/ColorContext";

import Token from "./Token";
import Svg from "./Svg";

require("./IPO.css");

const IPO = ({ match }) => {
  let game = games[match.params.game];
  let companies = game.companies;

  return (
    <Color>
      {c => (
        <div className="ipo">
          <h2>IPO</h2>
          <div className="ipo__companies">
            {R.map(
              company => (
                <div key={`ipo-${company.abbrev}`} className="ipo__company" style={{backgroundColor: c("plain")}}>
                  <div className="ipo__token">
                    <ColorContext.Provider value="companies">
                      <Svg viewBox="-25 -25 50 50">
                        <Token label={company.abbrev} color={company.color} />
                      </Svg>
                    </ColorContext.Provider>
                  </div>
                </div>
              ),
              companies
            )}
          </div>
          <style>{`@media print {@page {size: 11in 8.5in;}}`}</style>
        </div>
      )}
    </Color>
  );
};

export default IPO;
