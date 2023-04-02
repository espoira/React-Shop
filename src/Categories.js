import React from 'react';
import { CategoryItem } from './CategoryItem';


function Categories(props) {

    return (
        <section id="categories">

            <h3> <span>Категории</span> товаров </h3>
            <p>10 000+ ходовых позиций по специальным ценам</p>

            {props.categories.map((item) => (
                <CategoryItem key={item.id} id={item.id} {...item}
                              showList={props.showList}/>
            ))}

        </section>
    );
}

export {Categories};