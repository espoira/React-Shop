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
            company: '',
            filter: false,
        };
    }


    showFilter = (item) => {
        this.setState({flagFilter: true});
        this.setState ({target: item.target});
    };

    showCompany = (item) => {
        this.setState({filter: !this.state.filter});
        this.setState({company: item.company});
    };

    componentDidMount() {
      this.setState ({category: this.props.str});
      this.setState ({popular: !this.props.flag});
    };


    render() {
        const {category, popular, flagFilter, target, company, filter} = this.state;
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

                            company={company}
                            filter={filter}
                            showCompany={this.showCompany}

                            showProduct={showProduct}
                            addToCart={addToCart}
                            goBack={goBack}
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