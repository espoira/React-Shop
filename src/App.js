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
import products from "./products";


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
            amount: 0,
            flagCart: false,
            flagProduct: false,
            pricesSum: 0,
            goodId: 0,
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
        this.setState({amount:this.state.amount + 1});
        this.setState({pricesSum:this.state.pricesSum + item.price * 6});
    };


    removeFromCart = (itemId) => {
        const newOrder = this.state.order.filter((el) => el.id !== itemId);
        this.setState({order: newOrder});
        //eslint-disable-next-line
        this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                this.setState({pricesSum:this.state.pricesSum - orderItem.quantity * orderItem.price * 6});
                return this.setState({amount:this.state.amount - orderItem.quantity});
            }
        });
    };

    incQuantity = (itemId) => {
        const newOrder = this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                this.setState({pricesSum:this.state.pricesSum + orderItem.price * 6});
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
                if (newQuantity >= 0) {
                    this.setState({amount: this.state.amount - 1});
                    this.setState({pricesSum: this.state.pricesSum - orderItem.price * 6});
                } else {
                    this.setState({amount:this.state.amount});
                    this.setState({pricesSum: this.state.pricesSum});
                }
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

    showProduct = (id) => {
        products.map((item)=>{
            if (item.id == id) {
                this.setState ({goodId: id});
            }
        });
        this.setState ({flagProduct: true});
        this.setState ({flag: true});
    };

    goBack = () => {
        this.setState ({flag: false});
        this.setState ({flagCart: false});
        this.setState ({flagProduct: false});
    };


    render() {

        const {flag, typeName, categories, order, amount, pricesSum, goodId, flagCart, flagProduct} = this.state;

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
                    <Shop str={typeName} flag={flag} flagProduct={flagProduct} addToCart={this.addToCart} goBack={this.goBack} showProduct={this.showProduct} goodId={goodId}/>
                    <Categories categories={categories} showList={this.showList}/>

                    <Actions/>
                    <Brands/>
                    <Address/>
                </>
            ) : (

                    <Shop str={typeName} flag={flag} flagProduct={flagProduct} addToCart={this.addToCart} goBack={this.goBack} showProduct={this.showProduct} goodId={goodId} showFilter={this.showFilter}/>

            )

        }


        return (
            <>
                <Header/>

                <Cart quantity={amount} pricesSum={pricesSum} handleCartShow={this.handleCartShow}/>


                {content}


                <Footer/>
            </>
        );
    }
}

export default App;
