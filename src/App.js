import React from 'react';
import Header from "./components/Header";
import CategoriesList from "./components/CategoriesList";
import {useSelector} from "react-redux";
import Button from "./components/Button";
import FilteredCardList from "./components/FilteredCardList";

const App = () => {
    const cards = useSelector(state => state.cardReducer.cards)
    return (
        <div className={'app'}>
            <Header/>
            <div className="container">
                <CategoriesList/>
                <FilteredCardList cards={cards}/>
                <Button>Load More</Button>
            </div>

        </div>
    );
};

export default App;