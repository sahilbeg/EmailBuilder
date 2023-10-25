import { useState } from 'react';

function CardSelector() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (event) => {
    const clickedCard = event.currentTarget;
    setSelectedCard(clickedCard);
  };

  return (
    <div id="email_body" onClick={handleCardClick}>
      <div className="cardOneTd" style={{ border: selectedCard === 'parent' ? '3px solid blue' : 'none' }}>
        This is the parent div
      </div>
      <div className="cardOneTd" style={{ border: selectedCard === 'child' ? '3px solid blue' : 'none' }}>
        This is a child div
      </div>
    </div>
  );
}
