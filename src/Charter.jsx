import React from "react";
import * as R from "ramda";
import Token from "./Token";
import Phase from "./Phase";
import Color from "./data/Color";
import ColorContext from "./context/ColorContext";

const Charter = ({ name, abbrev, color, tokens, phases, turns }) => {
  let tokenSpots = R.addIndex(R.map)((token, index) => {
    return (
      <svg key={`token-${index}`}>
        <g transform={`translate(25 25)`}>
          <ColorContext.Provider value="companies">
            <Token label={abbrev} color={color} />
          </ColorContext.Provider>
          <g transform={`translate(0 39)`}>
            <text fontSize="10" textAnchor="middle">
              {token}
            </text>
          </g>
        </g>
      </svg>
    );
  }, tokens);

  let turnNodes = R.chain(turn => {
    let steps = R.addIndex(R.map)((step, i) => {
      return <li key={i}><span>{step}</span></li>;
    }, turn.steps);

    let stepsList = turn.ordered ? <ol>{steps}</ol> : <ul>{steps}</ul>;

    let optionals = R.addIndex(R.map)((step, i) => {
      return <li key={i}><span>{step}</span></li>;
    }, turn.optional || []);
    let optionalList = <ul>{optionals}</ul>

        return (
          <React.Fragment key={`turn-${turn.name}`}>
            <dt>{turn.name}</dt>
            <dd>{stepsList}</dd>
            {turn.optional && <dd>{optionalList}</dd>}
          </React.Fragment>
        );
  }, turns);

  return (
    <Color context="companies">
      {c => (
        <div className="cutlines">
          <div className="charter">
            <div className="charter__name">{name}</div>
            <div className="charter__tokens">{tokenSpots}</div>
            <div
              className="charter__hr"
              style={{ backgroundColor: c(color) }}
            />
            <div className="charter__trains">
              Trains
              <div className="charter__phase">
                <Phase phases={phases} />
              </div>
            </div>
            <div className="charter__treasury">
              Treasury
              <dl>{turnNodes}</dl>
            </div>
            <div
              className="charter__hr"
              style={{ backgroundColor: c(color) }}
            />
          </div>
        </div>
      )}
    </Color>
  );
};

export default Charter;
