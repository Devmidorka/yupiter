import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories:[
        {
            id: 0,
            title: "Show all",
            condition: 'all'
        },
        {
            id: 1,
            title: "Design",
            condition: 'design'
        },
        {
            id: 2,
            title: "Branding",
            condition: 'branding'
        },
        {
            id: 3,
            title: "Illustration",
            condition: 'illustration'
        },
        {
            id: 4,
            title: "Motion",
            condition: 'motion'
        },
    ],
    active: 0

}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setActiveByCondition(state, action){
            state.categories.map(category => {
                if(category.condition === action.payload){
                    state.active = category.id
                }
            })
        }
    }

})

export default categorySlice.reducer
export const {setActiveByCondition} = categorySlice.actions