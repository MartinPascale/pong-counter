import { useState } from 'react';

import Counter from 'containers/Counter';
import StartMenu from 'containers/StartMenu';

function App() {
  const [isCounter, setIsCounter] = useState(false);
  const [names, setNames] = useState({});

  return (
    <div className="App">
      {isCounter ? (
        <Counter names={names} />
      ) : (
        <StartMenu setIsCounter={setIsCounter} setNames={setNames} />
      )}
    </div>
  );
}

export default App;
