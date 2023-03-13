import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      alert('Please provide a non-empty value');
    } else {
      setInputValue('');
      window.location.href = '/screen2?input=' + inputValue;
    }
  }

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Screen1
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Route>
        <Route path='/screen2'>
          <Screen2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
