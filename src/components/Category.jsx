import React from 'react';
import {useDispatch} from "react-redux";
import {setActiveByCondition} from "../redux/reducers/categorySlice";

const Category = ({category = {}, isButton = false, isActive = false}) => {
    const dispatch = useDispatch()
    return (
        <div
            className={`category ${isButton ? 'category-button' : isActive ? 'active' : ''}`}
            onClick={() => dispatch(setActiveByCondition(category.condition))}
        >
            {category.title}
        </div>
    );
};

export default Category;