import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Screen2() {
  const [inputString, setInputString] = useState('');
  const [cards, setCards] = useState([]);
  const [resultString, setResultString] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const location = useLocation();
  const input = new URLSearchParams(location.search).get('input');

  useEffect(() => {
    if (input) {
      setInputString(input);
    }
  }, [input]);

  useEffect(() => {
    const countMap = {};
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString.charAt(i);
      countMap[char] = (countMap[char] || 0) + 1;
    }

    const cardData = Object.keys(countMap).map((char, index) => ({
      char: char,
      count: countMap[char],
      bgColor: `#${((1 << 24) * Math.random() | 0).toString(16)}`,
      id: index
    }));

    setCards(cardData);
  }, [inputString]);

  const handleDelete = (char) => {
    const filteredCards = cards.filter((card) => card.char !== char || card.count === 1);
    setCards(filteredCards);
  };

  useEffect(() => {
    let result = '';
    cards.forEach((card) => {
      for (let i = 0; i < card.count; i++) {
        result += card.char;
      }
    });
    setResultString(result);
    setShowSuccess(cards.every((card) => card.count === 1));
  }, [cards]);

  return (
    <div>
      <h1>Screen 2</h1>
      <Link to='/'>Back to Screen 1</Link>
      <h2>Original string: {inputString}</h2>
      {showSuccess ? (
        <h3>Congratulations! All characters have only one appearance.</h3>
      ) : (
        <div>
          <h3>New string: {resultString}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {cards.map((card) => (
              <div
                key={card.id}
                style={{ backgroundColor: card.bgColor, padding: '10px', margin: '10px' }}
                onClick={() => handleDelete(card.char)}
              >
                <span>{card.char}</span>
                {card.count > 1 && <span style={{ float: 'right', cursor: 'pointer' }}>x</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Screen2;
