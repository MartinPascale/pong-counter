/* eslint-disable react/prop-types */
import { useState } from 'react';

const Counter = ({ names: { player1, player2 } }) => {
  const [player1Count, setplayer1Count] = useState(0);
  const [player2Count, setplayer2Count] = useState(0);

  return (
    <div>
      <div>
        {player1}
        {player1Count}
        <button type="button" onClick={() => setplayer1Count(player1Count + 1)}>
          Add Win!
        </button>
      </div>
      <div>
        {player2}
        {player2Count}
        <button type="button" onClick={() => setplayer2Count(player2Count + 1)}>
          Add Win!
        </button>
      </div>
    </div>
  );
};

export default Counter;
