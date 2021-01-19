import { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlayerCounter from 'components/PlayerCounter';

import 'styles/containers/Counter.scss';

const reducer = (state, action) => {
  switch (action.type) {
    case 'player1':
      return { ...state, player1Count: state.player1Count + 1 };
    case 'player2':
      return { ...state, player2Count: state.player2Count + 1 };
    default:
      throw new Error();
  }
};

const Counter = ({ names: { player1, player2 } }) => {
  const initialState = { player1Count: 0, player2Count: 0 };

  const [{ player1Count, player2Count }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const handleIncrement = (id) => {
    if (id === 0) {
      dispatch({ type: 'player1' });
    } else {
      dispatch({ type: 'player2' });
    }
  };

  const players = [
    { id: 0, name: player1, wins: player1Count },
    { id: 1, name: player2, wins: player2Count },
  ];

  const isDraw = player1Count === player2Count;

  if (!(player1 && player1.trim() && player2 && player2.trim())) {
    return <Redirect to="/" />;
  }

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
  player1: PropTypes.string,
  player2: PropTypes.string,
};

Counter.propTypes = {
  names: PropTypes.shape(namesShape).isRequired,
};

export default Counter;
