import React from "react";
import TextTransition, { presets } from "react-text-transition";

function Numero(props) {
  return (
    <div>
      <div className="unidad-tiempo">
        <TextTransition
          text={
            `${props.dato}`.length === 1 ? "0" : `${props.dato}`.split("")[0]
          }
          springConfig={presets.wobbly}
        />
      </div>
      <div className="unidad-tiempo">
        <TextTransition
          text={
            `${props.dato}`.length === 1
              ? `${props.dato}`.split("")[0]
              : `${props.dato}`.split("")[1]
          }
          springConfig={presets.wobbly}
        />
      </div>
    </div>
  );
}

export default Numero;
