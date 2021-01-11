import React from "react";
import "./BoardTemplate.css";

const BoardTemplate = ({ form, table, score }) => {
  return (
    <main className="board-template">
      <div className="title">Tic-Tac-Toe</div>
      <section className="score">{score}</section>
      <section className="table-wrapper">{table}</section>
      <section className="form-wrapper">{form}</section>
    </main>
  );
};

export default BoardTemplate;
