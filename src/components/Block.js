import React from "react";
import "./Block.css";

const Block = ({ id, ox, select }) => {
  return (
    <div className="block" onClick={() => select(id)}>
      <p className="ox">{ox === 0 ? "⭕" : ox === 1 ? "❌" : ""}</p>
    </div>
  );
};

export default Block;
