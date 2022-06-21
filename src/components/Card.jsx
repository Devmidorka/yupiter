import React from 'react';
import Category from "./Category";

const Card = ({image, category, title}) => {
    return (
        <div className={'card'} >
            <img src={image} alt=""/>
            <div className="card__info">
                <Category category={category} isButton={true}/>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;