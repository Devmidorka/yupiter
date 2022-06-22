import React, {useEffect} from 'react';
import Header from "./components/Header";
import CategoriesList from "./components/CategoriesList";
import {useDispatch, useSelector} from "react-redux";
import Button from "./components/Button";
import FilteredCardList from "./components/FilteredCardList";
import {removeActiveCards, setNextPage} from "./redux/reducers/cardSlice";

const App = () => {
    const cards = useSelector(state => state.cardReducer.cards)
    const dispatch = useDispatch()
    const deleteActiveCards = (e) => {
        if(e.key === 'Delete'){
            dispatch(removeActiveCards())
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', deleteActiveCards)
        return () => {
            document.removeEventListener('keydown', deleteActiveCards)
        }
    }, [])
    return (
        <div className={'app'}>
            <Header/>
            <div className="container">
                <CategoriesList/>
                <FilteredCardList cards={cards}/>
                <Button onClick={() => dispatch(setNextPage())}>Load More</Button>
            </div>

        </div>
    );
};

export default App;