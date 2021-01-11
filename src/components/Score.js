import React from "react";

const Score = ({o, x}) => {
    return (
        <div className="score">
            ⭕{o} - ❌{x}
        </div>
    )
}

export default Score;