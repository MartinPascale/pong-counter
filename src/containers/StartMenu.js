import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import pongGif from 'assets/empty.gif';

import 'styles/containers/StartMenu.scss';

const StartMenu = ({ handleContinue }) => {
  const history = useHistory();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleContinueClick = () => {
    if (player1 && player1.trim() && player2 && player2.trim()) {
      handleContinue({ player1, player2 });
      history.push('/counter');
    }
  };

  return (
    <div className="start-menu">
      <div className="start-menu__box">
        <img src={pongGif} alt="pong decoration" />
        <label htmlFor="player1" className="start-menu__box__name-input">
          Player 1 Name:
          <input
            id="player1"
            placeholder="Tony Stark"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
        </label>
        <label htmlFor="player2" className="start-menu__box__name-input">
          Player 2 Name:
          <input
            id="player2"
            placeholder="Steve Rogers"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
        </label>
        <button
          type="button"
          className="start-menu__box__continue"
          onClick={handleContinueClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

StartMenu.propTypes = {
  handleContinue: PropTypes.func.isRequired,
};

export default StartMenu;
