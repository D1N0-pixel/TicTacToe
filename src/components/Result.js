import React from "react";
import "./Result.css";

const Result = ({ isEnd }) => {
  if (isEnd === -1) {
    return <div className="result"><p className="comment">무승부</p></div>;
  }
  else if (isEnd > 0) {
    return <div className="result"><p className="comment">{['⭕','❌'][isEnd - 1]} Win!!</p></div>;
  } else {
      return null;
  }
}

export default Result;
