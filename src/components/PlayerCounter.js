import PropTypes from 'prop-types';

const PlayerCounter = ({ player: { name, wins, action } }) => {
  return (
    <div className="counter__top__player">
      <div className="counter__top__player__data">
        {name}
        <span>{wins}</span>
      </div>
      <button type="button" onClick={() => action(wins + 1)}>
        Add Win!
      </button>
    </div>
  );
};

const playerShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

PlayerCounter.propTypes = {
  player: PropTypes.shape(playerShape).isRequired,
};

export default PlayerCounter;
