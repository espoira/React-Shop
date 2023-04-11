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
            pageNumber: 1,
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

    clearFilters = () => {
        this.setState({flagFilter: false});
        this.setState ({filter: false});
        this.setState({sortingFlag: false});
    };


    componentDidMount() {
        window.scrollTo(0, 72);
        this.setState ({category: this.props.title});
        this.setState ({popular: !this.props.flag});
    };


    render() {
        const {category, popular, flagFilter, target, company, filter, sortingFlag, sortedNames, pageNumber} = this.state;
        const {flagProduct, goodId, addToCart = Function.prototype, goBack = Function.prototype,
               showProduct = Function.prototype, showCategory = Function.prototype} = this.props;

        return (
            <>
                {!flagProduct ? (

                    <section id="goods">

                        <ProductsList
                            flag={popular}
                            category={category}
                            goods={products}
                            page={pageNumber}

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
                            clearFilters={this.clearFilters}
                            addToCart={addToCart}
                            goBack={goBack}
                        />

                    </section>

                ) : (

                    <ProductInfo goods={products} goodId={goodId} showCategory={showCategory} addToCart={addToCart} goBack={goBack}/>

                )}
            </>
        );
    }
}

export {Shop};