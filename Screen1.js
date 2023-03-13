import React from 'react';

function Screen1({ inputValue, handleInputChange, handleSubmit }) {
  return (
    <div>
      <h1>Screen 1</h1>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Screen1;
