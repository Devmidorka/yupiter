import React from 'react';
import button from "./Button";
import {useDispatch} from "react-redux";
import {removeActiveCards} from "../redux/reducers/cardSlice";

const DeleteButton = () => {
    const dispatch = useDispatch()
    const deleteActiveCards = (e) => {
        e.stopPropagation()
        dispatch(removeActiveCards())
    }

    return (
        <button className='delete-button' onClick={deleteActiveCards}>Delete</button>
    );
};

export default DeleteButton;