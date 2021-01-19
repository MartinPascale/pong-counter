import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlayerCounter from 'components/PlayerCounter';

import 'styles/containers/Counter.scss';

const Counter = ({ names: { player1, player2 } }) => {
  const history = useHistory();
  const [player1Count, setplayer1Count] = useState(0);
  const [player2Count, setplayer2Count] = useState(0);

  useEffect(() => {
    if (!(player1 && player1.trim() && player2 && player2.trim())) {
      history.push('/');
    }
  }, []);

  const handleIncrement = (id) => {
    if (id === 0) {
      setplayer1Count(player1Count + 1);
    } else {
      setplayer2Count(player2Count + 1);
    }
  };

  const players = [
    { id: 0, name: player1, wins: player1Count },
    { id: 1, name: player2, wins: player2Count },
  ];

  const isDraw = player1Count === player2Count;

  return (
    <div className="counter">
      <div className="counter__top">
        {players.map((player) => (
          <PlayerCounter
            key={player.id}
            player={player}
            handleIncrement={handleIncrement}
          />
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
