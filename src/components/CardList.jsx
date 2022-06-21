import React from 'react';
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {changeCartState} from "../redux/reducers/cardSlice";

const CardList = ({cards}) => {
    const countOfCardsPerPage = useSelector(state => state.cardReducer.cardsPerPage)
    const activePage = useSelector(state => state.cardReducer.page)
    const dispatch = useDispatch()
    return (
        <div className='card__list'>
            {cards.map((card, index) => {
                    if (index < countOfCardsPerPage * activePage) {
                        return <Card
                            active={card.active}
                            onClick={() => dispatch(changeCartState(card.id))}
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