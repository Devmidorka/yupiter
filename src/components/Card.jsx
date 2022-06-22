import React from 'react';
import Category from "./Category";
import DeleteButton from "./DeleteButton";

const Card = ({image, category, title, active, onClick}) => {
    return (
        <div
            className={`card ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img src={image} alt=""/>
            <div className="card__info">
                <Category category={category} isButton={true}/>
                <p>{title}</p>
            </div>
            <DeleteButton/>
        </div>
    );
};

export default Card;