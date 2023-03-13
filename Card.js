import React from 'react';

function Card(props) {
  const { char, count, bgColor, onClick } = props;

  return (
    <div
      style={{ backgroundColor: bgColor, padding: '10px', margin: '10px', cursor: 'pointer' }}
      onClick={onClick}
    >
      <span>{char}</span>
      {count > 1 && <span style={{ float: 'right' }}>x{count}</span>}
    </div>
  );
}

export default Card;
