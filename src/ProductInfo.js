import React from 'react';
import { ProductData } from './ProductData';


class ProductInfo extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 198);
    };


    render() {

        const {
            goods,
            goodId,
            addToCart = Function.prototype,
            incQuantity = Function.prototype,
            decQuantity = Function.prototype,
            showCategory = Function.prototype,
            goBack = Function.prototype
        } = this.props;


        return (
            <>
                {goods.map((item) => {
                    if (item.id === goodId) {

                        return (

                            <ProductData key={item.id} {...item} showCategory={showCategory} addToCart={addToCart}
                                         incQuantity={incQuantity} decQuantity={decQuantity} goBack={goBack} />

                        )
                    }
                })}

            </>
        );

    }

}

export { ProductInfo };
