import React, { Component } from "react";
import BoardTemplate from "./components/BoardTemplate";
import Form from "./components/Form";
import Table from "./components/Table";
import Score from "./components/Score";
import Result from "./components/Result";

class App extends Component {
  state = {
    turn: 0,
    blocks: [
      { id: 0, ox: 2 },
      { id: 1, ox: 2 },
      { id: 2, ox: 2 },
      { id: 3, ox: 2 },
      { id: 4, ox: 2 },
      { id: 5, ox: 2 },
      { id: 6, ox: 2 },
      { id: 7, ox: 2 },
      { id: 8, ox: 2 },
    ],
    end: 0,
    win: [0, 0],
  };

  isEnd = (blocks, turn) => {
    if (blocks.map((block) => block["ox"] === 2).indexOf(true) === -1) {
      return -1;
    }
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    while (line.length) {
      const li = line.pop();
      if (
        blocks[li[0]]["ox"] === blocks[li[1]]["ox"] &&
        blocks[li[1]]["ox"] === blocks[li[2]]["ox"] &&
        blocks[li[0]]["ox"] !== 2
      ) {
        return (turn % 2) + 1;
      }
    }
    return 0;
  };

  select = (id) => {
    const { blocks, turn, win } = this.state;
    const nextBlocks = [...blocks];
    const nextWin = [...win];
    let nextTurn = turn;
    if (nextBlocks[id].ox === 2) {
      nextBlocks[id].ox = nextTurn++ % 2;
    }
    const nextEnd = this.isEnd(nextBlocks, turn);
    if (nextEnd > 0) {
      nextWin[turn % 2] += 1;
    }
    this.setState({
      turn: nextTurn,
      blocks: nextBlocks,
      end: nextEnd,
      win: nextWin,
    });
  };

  newGame = () => {
    const newBlocks = [
      { id: 0, ox: 2 },
      { id: 1, ox: 2 },
      { id: 2, ox: 2 },
      { id: 3, ox: 2 },
      { id: 4, ox: 2 },
      { id: 5, ox: 2 },
      { id: 6, ox: 2 },
      { id: 7, ox: 2 },
      { id: 8, ox: 2 },
    ];
    this.setState({ turn: 0, blocks: newBlocks, end: 0 });
  };

  render() {
    const { blocks, win, end } = this.state;
    const { select, newGame } = this;
    return (
      <BoardTemplate
        score={<Score o={win[0]} x={win[1]} />}
        table={
          end === 0 ? (
            <Table blocks={blocks} select={select} />
          ) : (
            <Result isEnd={end} />
          )
        }
        form={<Form newGame={newGame} />}
      ></BoardTemplate>
    );
  }
}
export default App;
