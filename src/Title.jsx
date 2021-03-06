import React from "react";
import Color from "./data/Color";

const Title = ({ game, variation }) => {
  let size = game.info.titleSize || 200;
  let subSize = game.info.subTitleSize || 30;
  let designerSize = game.info.designerSize || 20;

  let mapName = null;
  variation = variation || 0;
  if (variation !== 0 && Array.isArray(game.map)) {
    mapName = game.map[variation].name;
  }

  let x = (game.info.titleX || 0) + 50;
  let y = (game.info.titleY || 0) + 220;
  let rotate = (game.info.titleRotate || 0);

  return (
    <Color>
      {c => (
        <g
          transform={`translate(${x} ${y}) rotate(${rotate})`}
        >
          <text
            fill={c("black")}
            fontFamily="Bitter"
            fontWeight="bold"
            fontSize={size}
            textAnchor="start"
            lengthAdjust="spacingAndGlyphs"
            x="0"
            y="0"
          >
            {game.info.title}
          </text>
          {game.info.subtitle && (
            <text
              fill={c("black")}
              fontFamily="Bitter"
              fontWeight="bold"
              fontSize={subSize}
              textAnchor="start"
              lengthAdjust="spacingAndGlyphs"
              x="0"
              y={subSize + 10}
            >
              {game.info.subtitle}
            </text>
          )}
          <text
            fill={c("black")}
            fontFamily="Bitter"
            fontWeight="bold"
            fontSize={designerSize}
            textAnchor="start"
            lengthAdjust="spacingAndGlyphs"
            x="0"
            y={designerSize + 10 + (game.info.subtitle ? (subSize + 10) : 0)}
          >
            by {game.info.designer}
            {mapName && ` ⋯ ${mapName}`}
          </text>
        </g>
      )}
    </Color>
  );
};

export default Title;
