import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cards: [
        {
            id: 0,
            image: 'card9',
            title: 'SOFA',
            category:{
                title: 'Design',
                condition: 'design'
            }

        },
        {
            id: 1,
            image: 'card8',
            title: 'KeyBoard',
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        },
        {
            id: 2,
            image: 'card1',
            title: 'Word Media',
            category:{
                title: 'Illustration',
                condition: 'illustration'
            }
        },
        {
            id: 3,
            image: 'card7',
            title: 'DDDone',
            category:{
                title: 'Motion',
                condition: 'motion'
            }
        },
        {
            id: 4,
            image: 'card6',
            title: 'Abstract',
            category:{
                title: 'Design',
                condition: 'design'
            }
        },
        {
            id: 5,
            image: 'card5',
            title: 'HandP',
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        },
        {
            id: 6,
            image: 'card4',
            title: 'Architect',
            category:{
                title: 'Motion',
                condition: 'motion'
            }
        },
        {
            id: 7,
            image: 'card3',
            title: 'CalcC',
            category:{
                title: 'Design',
                condition: 'design'
            }
        },
        {
            id: 8,
            image: 'card2',
            title: 'Sport',
            category:{
                title: 'Branding',
                condition: 'branding'
            }
        }
    ]
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {

    }

})

export default cardSlice.reducer
