import React from "react";
import "./Form.css"

const Form = ({newGame}) => {
    return (
        <div className="form">
            <div className="newgame" onClick={newGame}>새 게임</div>
        </div>
    );
}

export default Form;