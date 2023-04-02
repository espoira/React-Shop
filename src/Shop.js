import React from 'react';

import { ProductsList } from './ProductsList';
import {ProductInfo} from './ProductInfo';
import products from './products';


class Shop extends React.Component {

    constructor(){
        super();
        this.state = {
            category: '',
            popular: true,
        };
    }


    componentDidMount() {
      this.setState ({category: this.props.str});
      this.setState ({popular: !this.props.flag});
    };


    render() {
        const {category, popular} = this.state;
        const {flagProduct, addToCart = Function.prototype, goBack = Function.prototype, showProduct = Function.prototype} = this.props;

        return (
            <>
                {!flagProduct ? (

                    <section id="goods">

                        <ProductsList flag={popular} category={category} goods={products} addToCart={addToCart} goBack={goBack} showProduct={showProduct} />

                    </section>

                ) : (

                    <ProductInfo goods={products} addToCart={addToCart} goBack={goBack}/>

                )}
            </>
        );
    }
}

export {Shop};