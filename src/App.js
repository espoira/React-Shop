import React, { Component } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Shop } from './Shop';
import { Categories } from "./Categories";

import { Banner } from './Banner';
import { Actions } from './Actions';
import { Brands } from "./Brands";
import { Address } from './Address';


class App extends Component {
    constructor(){
        super();
        this.state = {
            flag: false,
            typeName: '',
            categories:[
                { id: 1, name: 'Бытовая химия' },
                { id: 2, name: 'Косметика и гигиена' },
                { id: 3, name: 'Товары для дома' },
                { id: 4, name: 'Товары для детей и мам' },
                { id: 5, name: 'Посуда' }
            ],
            order: [],
            flagCart: false,
            flagProduct: false,
            amount: 0,
        };
        this.addToCart = this.addToCart.bind(this);
    };


    addToCart = (item) => {
        const itemIndex = this.state.order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            this.setState({order: [...this.state.order, newItem]});
        } else {
            const newOrder = this.state.order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            this.setState({order:newOrder});
        }
        this.setState({alertName:item.name});
        this.setState({amount:this.state.amount + 1});
    };


    removeFromCart = (itemId) => {
        const newOrder = this.state.order.filter((el) => el.id !== itemId);
        this.setState({order: newOrder});
        //eslint-disable-next-line
        this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                return this.setState({amount:this.state.amount - orderItem.quantity});
            }
        });
    };

    incQuantity = (itemId) => {
        const newOrder = this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                }
            } else {
                return orderItem;
            }
        });
        this.setState({order:newOrder});
        this.setState({amount:this.state.amount + 1});
    };

    decQuantity = (itemId) => {
        const newOrder = this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                const newQuantity = orderItem.quantity - 1;
                (newQuantity >= 0) ? this.setState({amount:this.state.amount - 1}) : this.setState({amount:this.state.amount});
                return {
                    ...orderItem,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return orderItem;
            }
        });
        this.setState({order: newOrder});
    };


    handleCartShow = () => {
        this.setState({flagCart: !this.state.flagCart});
    };

    showList = (id) => {
        this.setState ({flag: true});
        this.setState ({typeName: this.state.categories[id-1].name});
    };

    showProduct = () => {
        this.setState ({flagProduct: true});
    };

    goBack = () => {
        this.setState ({flag: false});
        this.setState ({flagCart: false});
        this.setState ({flagProduct: false});
    };


    render() {

        const {flag, typeName, categories, order, amount, flagCart, flagProduct} = this.state;

        let content;

        if (flagCart) {

            content = <CartList
                order={order}
                handleCartShow={this.handleCartShow}
                removeFromCart={this.removeFromCart}
                incQuantity={this.incQuantity}
                decQuantity={this.decQuantity}
                goBack={this.goBack}
            />

        } else {

            content = (!flag) ? (
                <>
                    <Banner/>
                    <Shop str={typeName} flag={flag} flagProduct={flagProduct} addToCart={this.addToCart} goBack={this.goBack} showProduct={this.showProduct}/>
                    <Categories categories={categories} showList={this.showList}/>

                    <Actions/>
                    <Brands/>
                    <Address/>
                </>
            ) : (

                <Shop str={typeName} flag={flag} flagProduct={flagProduct} addToCart={this.addToCart} goBack={this.goBack} showProduct={this.showProduct} showFilter={this.showFilter}/>

            )

        }


        return (
            <>
                <Header/>

                <Cart quantity={amount} handleCartShow={this.handleCartShow}/>


                {content}


                <Footer/>
            </>
        );
    }
}

export default App;
