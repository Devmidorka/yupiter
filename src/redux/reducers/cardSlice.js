import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cards: [
        {
            id: 0,
            image: 'card9',
            title: 'SOFA',
            active:false,
            category:{
                title: 'Design',
                condition: 'design'
            }

        },
        {
            id: 1,
            image: 'card8',
            title: 'KeyBoard',
            active:false,
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        },
        {
            id: 2,
            image: 'card1',
            title: 'Word Media',
            active:false,
            category:{
                title: 'Illustration',
                condition: 'illustration'
            }
        },
        {
            id: 3,
            image: 'card7',
            title: 'DDDone',
            active:false,
            category:{
                title: 'Motion',
                condition: 'motion'
            }
        },
        {
            id: 4,
            image: 'card6',
            title: 'Abstract',
            active:false,
            category:{
                title: 'Design',
                condition: 'design'
            }
        },
        {
            id: 5,
            image: 'card5',
            title: 'HandP',
            active:false,
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        },
        {
            id: 6,
            image: 'card4',
            title: 'Architect',
            active:false,
            category:{
                title: 'Motion',
                condition: 'motion'
            }
        },
        {
            id: 7,
            image: 'card3',
            title: 'CalcC',
            active:false,
            category:{
                title: 'Design',
                condition: 'design'
            }
        },
        {
            id: 8,
            image: 'card2',
            title: 'Sport',
            active:false,
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        },
        {
            id: 9,
            image: 'card9',
            title: 'SOFA2',
            active:false,
            category:{
                title: 'Design',
                condition: 'design'
            }

        },
        {
            id: 10,
            image: 'card8',
            title: 'KeyBoard2',
            active:false,
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        },
        {
            id: 11,
            image: 'card1',
            title: 'Word Media2',
            active:false,
            category:{
                title: 'Illustration',
                condition: 'illustration'
            }
        },
        {
            id: 12,
            image: 'card7',
            title: 'DDDone2',
            active:false,
            category:{
                title: 'Motion',
                condition: 'motion'
            }
        },
        {
            id: 13,
            image: 'card6',
            title: 'Abstract2',
            active:false,
            category:{
                title: 'Design',
                condition: 'design'
            }
        },
        {
            id: 14,
            image: 'card5',
            title: 'HandP2',
            active:false,
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        },
        {
            id: 15,
            image: 'card4',
            title: 'Architect2',
            active:false,
            category:{
                title: 'Motion',
                condition: 'motion'
            }
        },
        {
            id: 16,
            image: 'card3',
            title: 'CalcC2',
            active:false,
            category:{
                title: 'Design',
                condition: 'design'
            }
        },
        {
            id: 17,
            image: 'card2',
            title: 'Sport2',
            active:false,
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        }
    ],
    cardsPerPage: 9,
    page: 1
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setNextPage(state){
            if(state.cards.length > state.cardsPerPage * state.page){
                state.page += 1;
            }
        },
        changeCartState(state, action){
            state.cards.forEach(card => {
                if(card.id === action.payload){
                    card.active = !card.active
                }
            })
        },
        removeActiveCards(state){
            state.cards = state.cards.filter((card) => card.active !== true)
        }
    }

})

export default cardSlice.reducer
export const {setNextPage, changeCartState, removeActiveCards} = cardSlice.actions