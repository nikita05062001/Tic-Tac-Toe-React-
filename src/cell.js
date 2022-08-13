import React from "react";

const Cell = ({ squar, clickhandler, id }) => {
  return (
    <div key={id} className="ttt-grid" onClick={() => clickhandler(squar, id)}>
      {squar}
    </div>
  );
};

export default Cell;
