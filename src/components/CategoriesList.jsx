import React, {useState} from 'react';
import Category from "./Category";
import {useSelector} from "react-redux";

const CategoriesList = () => {

    const categories = useSelector(state => state.categoryReducer.categories)
    const activeCategory = useSelector(state => state.categoryReducer.active)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='categories-list'>
                {categories.map(category =>
                    <Category
                        category={category}
                        key={category.id}
                        isActive={activeCategory === category.id}
                    />
                )}
            </div>

            <div
                className={`categories-list-popup ${isOpen  ? 'open' : ''}`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {categories[activeCategory].title}
                {isOpen ?
                    <div className="popup">
                        {categories.map(category => category.id !== activeCategory ?
                            <Category
                                category={category}
                                key={category.id}
                            />
                            :
                            null
                        )}
                    </div>
                    :
                    null
                }


            </div>
        </>

    );
};

export default CategoriesList;