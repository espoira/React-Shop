import React from "react";
import {ProductItem} from "./ProductItem";

function NameSorting (props) {
    const {
        goods,
        sortedNames,
        value,
        addToCart = Function.prototype,
        showProduct = Function.prototype,
    } = props;


    return (

        <>
            {value == 'by-name' ? (

                sortedNames.sort().map((goodName) => {

                    return <SortedGoods goods={goods} goodName={goodName}
                                        addToCart={addToCart} showProduct={showProduct}/>

                })

            ) : (

                sortedNames.sort().reverse().map((goodName) => {

                    return <SortedGoods goods={goods} goodName={goodName}
                                        addToCart={addToCart} showProduct={showProduct}/>

                })

            )

            }

        </>

    )

}

export {NameSorting};


function SortedGoods (props) {
    const {
        goods,
        goodName,
        addToCart = Function.prototype,
        showProduct = Function.prototype,
    } = props;


    return (

        <>

            {goods.map((good) => {
                if (good.name === goodName) {
                    return (

                        <ProductItem key={good.id} {...good} addToCart={addToCart}
                                   showProduct={showProduct}/>

                    )
                }
            })}

        </>

    )

}
