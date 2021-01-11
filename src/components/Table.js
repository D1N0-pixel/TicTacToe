import React from "react";
import Block from "./Block";

const Table = ({ blocks, select }) => {
  return blocks.map(({id, ox}) => <Block id={id} ox={ox} select={select} />);
};

export default Table;
