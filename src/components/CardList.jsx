import React from 'react';
import Card from "./Card";
import {useSelector} from "react-redux";

const CardList = ({cards}) => {
    const countOfCardsPerPage = useSelector(state => state.cardReducer.cardsPerPage)
    const activePage = useSelector(state => state.cardReducer.page)
    return (
        <div className='card__list'>
            {cards.map((card, index) => {
                    if (index < countOfCardsPerPage * activePage) {
                        return <Card
                            key={card.id}
                            title={card.title}
                            category={card.category}
                            image={`/images/${card.image}.png`}
                        />
                    }
                    return null
                }
            )}
        </div>
    );
};

export default CardList;