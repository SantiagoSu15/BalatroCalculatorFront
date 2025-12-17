import React from 'react';

const JokersContainer = ({ jokers }) => {
  return (
    <div className="contenedorJokers" id="jokerSeleccionados">
      {jokers.map((joker, idx) => (
        <div key={idx} className="joker"></div>
      ))}
    </div>
  );
};

export default JokersContainer;