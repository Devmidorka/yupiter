import React from 'react';
import Card from "./Card";

const CardList = ({cards}) => {
    return (
        <div className='card__list'>
            {cards.map(card =>
                <Card
                    key={card.id}
                    title={card.title}
                    category={card.category}
                    image={`/images/${card.image}.png`}
                />
            )}
        </div>
    );
};

export default CardList;