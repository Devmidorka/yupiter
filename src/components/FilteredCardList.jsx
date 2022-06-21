import React, {useMemo} from 'react';
import CardList from "./CardList";
import {useSelector} from "react-redux";

const FilteredCardList = ({cards}) => {
    const categories = useSelector((state) => state.categoryReducer.categories)
    const activeCategory = useSelector((state) => state.categoryReducer.active)

    const sortedCards = useMemo(() => {
        if(categories[activeCategory].condition === 'all'){
            return cards
        }
        return cards.filter(card => card.category.condition === categories[activeCategory].condition)
    }, [activeCategory, cards])



    return (
        <div>
            <CardList cards={sortedCards}/>
        </div>
    );
};

export default FilteredCardList;