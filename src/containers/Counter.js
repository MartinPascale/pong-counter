import { useState } from 'react';
import PropTypes from 'prop-types';

import PlayerCounter from 'components/PlayerCounter';

import 'styles/containers/Counter.scss';

const Counter = ({ names: { player1, player2 } }) => {
  const [player1Count, setplayer1Count] = useState(0);
  const [player2Count, setplayer2Count] = useState(0);

  const players = [
    { id: 0, name: player1, wins: player1Count, action: setplayer1Count },
    { id: 1, name: player2, wins: player2Count, action: setplayer2Count },
  ];

  const isDraw = player1Count === player2Count;

  return (
    <div className="counter">
      <div className="counter__top">
        {players.map((player) => (
          <PlayerCounter key={player.id} player={player} />
        ))}
      </div>
      <div className="counter__bottom">
        {isDraw ? (
          <div>It is a Draw!</div>
        ) : (
          <div>
            Current Winner: {player1Count > player2Count ? player1 : player2}
          </div>
        )}
        <div>Win difference: {Math.abs(player1Count - player2Count)}</div>
      </div>
    </div>
  );
};

const namesShape = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
};

Counter.propTypes = {
  names: PropTypes.shape(namesShape).isRequired,
};

export default Counter;
