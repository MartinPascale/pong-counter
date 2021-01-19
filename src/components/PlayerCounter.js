import PropTypes from 'prop-types';

const PlayerCounter = ({ player: { id, name, wins }, handleIncrement }) => {
  return (
    <div className="counter__top__player">
      <div className="counter__top__player__data">
        {name}
        <span>{wins}</span>
      </div>
      <button type="button" onClick={() => handleIncrement(id)}>
        Add Win!
      </button>
    </div>
  );
};

const playerShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
};

PlayerCounter.propTypes = {
  player: PropTypes.shape(playerShape).isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default PlayerCounter;
