import React from 'react';
import {ProductItem} from "./ProductItem";

function GoodsSorting (props) {
    const {
        goods,
        filter,
        flagFilter,
        sortingFlag,
        sortedNames,
        showSorted = Function.prototype,
        addToCart = Function.prototype,
        showProduct = Function.prototype,
    } = props;


    return (
        <>
            <span id="sorting" onClick={() => showSorted()}><b>Сортировка:</b></span>

            <select>
                <option onChange={() => showSorted()} value="by-name">По названию (А - Я)</option>
                <option onChange={() => showSorted()} value="by-name-reverse">По названию (Я - А)</option>
            </select>

            {sortingFlag && !flagFilter && !filter ? (

                sortedNames.sort().map((goodName) => {

                    return goods.map((good) => {
                        if (good.name === goodName) {
                            return (

                                <ProductItem key={good.id} {...good} addToCart={addToCart} showProduct={showProduct}/>

                            )
                        }
                    })

                })

            ) : (
                null
            )}

        </>
    );
}

export {GoodsSorting};