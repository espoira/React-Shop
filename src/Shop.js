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
            checkFilter: false,
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
        this.setState({sortingFlag: false});
    };

    showCompany = (item) => {
        this.setState({checkFilter: !this.state.checkFilter});
        this.setState({company: item.company});
        this.setState({sortingFlag: false});
    };

    clearFilters = () => {
        this.setState({flagFilter: false});
        this.setState ({checkFilter: false});
        this.setState({sortingFlag: false});
    };

    showPage = (number) => {
        window.scrollTo(0, 198);
        [1,2,3,4,5].map((number) => {
            document.getElementById(`link-${number}`).style.background = 'none';
        });
        document.getElementById(`link-${number}`).style.background =
            'linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)';
        this.setState({pageNumber: number});
    };


    componentDidMount() {
        window.scrollTo(0, 72);
        this.setState ({category: this.props.title});
        this.setState ({popular: !this.props.flag});
    };


    render() {
        const {category, popular, pageNumber, sortedNames, sortingFlag,
               target, company, flagFilter, checkFilter} = this.state;

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
                            showPage={this.showPage}

                            target={target}
                            flagFilter={flagFilter}
                            showFilter={this.showFilter}

                            company={company}
                            checkFilter={checkFilter}
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

                    <ProductInfo goods={products} goodId={goodId} showCategory={showCategory}
                                 addToCart={addToCart} goBack={goBack}/>

                )}
            </>
        );
    }
}

export {Shop};