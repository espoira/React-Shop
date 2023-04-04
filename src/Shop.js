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
            flagFilter: false,
            target: '',
        };
    }


    showFilter = (type) => {
        this.setState({flagFilter: true});
        this.setState ({target: type});
    };


    componentDidMount() {
      this.setState ({category: this.props.str});
      this.setState ({popular: !this.props.flag});
    };


    render() {
        const {category, popular, flagFilter, target} = this.state;
        const {flagProduct, goodId, addToCart = Function.prototype, goBack = Function.prototype, showProduct = Function.prototype} = this.props;
        console.log(target);
        return (
            <>
                {!flagProduct ? (

                    <section id="goods">

                        <ProductsList
                            flag={popular}
                            category={category}
                            goods={products}

                            target={target}
                            flagFilter={flagFilter}
                            showFilter={this.showFilter}

                            addToCart={addToCart}
                            goBack={goBack}
                            showProduct={showProduct}
                        />

                    </section>

                ) : (

                    <ProductInfo goods={products} goodId={goodId} addToCart={addToCart} goBack={goBack}/>

                )}
            </>
        );
    }
}

export {Shop};