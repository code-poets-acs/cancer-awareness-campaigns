import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function FlipCard(props) {
  const [flip, setFlip] = useState(false);
  var frontText = props.frontText;
  var backText = props.backText;
  return (
      <ReactCardFlip isFlipped={flip}
          flipDirection="vertical">
          <div style={{
              background: '#fffff',
              fontSize: '32px',
              color: '#003399',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'center',
              padding: '10px',
              height: '200px',
              border: '1px solid #000000'
          }} onClick={() => setFlip(!flip)}><b>{frontText}</b></div>
          <div style={{
              background: '#fffff',
              fontSize: '16px',
              color: '#CC0033',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'center',
              padding: '10px',
              height: '200px',
              border: '1px solid #000000'
          }} onClick={() => setFlip(!flip)}><b>{backText}</b></div>
      </ReactCardFlip>
  );  
}

export default FlipCard;
