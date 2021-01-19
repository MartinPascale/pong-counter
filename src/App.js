import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Counter from 'containers/Counter';
import StartMenu from 'containers/StartMenu';

import 'styles/index.css';

function App() {
  const [names, setNames] = useState({});

  const handleContinue = (nameObj) => {
    setNames(nameObj);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/counter">
            <Counter names={names} />
          </Route>
          <Route path="/">
            <StartMenu handleContinue={handleContinue} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
