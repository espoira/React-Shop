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

            <span onClick={() => showSorted()}><b>Сортировка:</b></span>

            {sortingFlag && !flagFilter && !filter ? (

                sortedNames.sort().reverse().map((goodName) => {

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