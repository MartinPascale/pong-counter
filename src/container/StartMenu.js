const StartMenu = () => {
  return (
    <div>
      <div className="start-menu">
        <label htmlFor="player1">
          Player 1 Name:
          <input id="player1" />
        </label>
        <label htmlFor="player2">
          Player 2 Name:
          <input id="player2" />
        </label>
        <button type="button">Continue</button>
      </div>
    </div>
  );
};

export default StartMenu;
