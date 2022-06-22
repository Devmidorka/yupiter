import React from 'react';
import {useDispatch} from "react-redux";
import {setActiveByCondition} from "../redux/reducers/categorySlice";

const Category = ({category = {}, isButton = false, isActive = false}) => {
    const dispatch = useDispatch()
    const click = (e) => {
        e.stopPropagation()
        dispatch(setActiveByCondition(category.condition))
    }
    return (
        <div
            className={`category ${isButton ? 'category-button' : isActive ? 'active' : ''}`}
            onClick={click}
        >
            {category.title}
        </div>
    );
};

export default Category;