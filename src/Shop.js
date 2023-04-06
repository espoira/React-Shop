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
            sortingFlag: false,
            sortedNames: [],
        };
    }

    showSorted = () => {
        this.setState({sortingFlag: true});
    };

    showFilter = (type) => {
        this.setState({flagFilter: true});
        this.setState ({target: type});
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
        const {category, popular, flagFilter, target, company, filter, sortingFlag, sortedNames} = this.state;
        const {flagProduct, goodId, addToCart = Function.prototype, goBack = Function.prototype, showProduct = Function.prototype} = this.props;

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

                            sortedNames={sortedNames}
                            sortingFlag={sortingFlag}
                            showSorted={this.showSorted}

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