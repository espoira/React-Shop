import React from 'react';
import {ProductItem} from "./ProductItem";
import {NameSorting} from "./NameSorting";

class GoodsSorting extends React.Component {
    constructor(props){
        super();
        this.state = {
            value: 'empty',
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {

        const {value} = this.state;

        const {
            goods,
            flagFilter,
            checkFilter,
            sortedNames,
            sortingFlag,
            showSorted = Function.prototype,
            addToCart = Function.prototype,
            showProduct = Function.prototype,
        } = this.props;


        return (

            <>
                <span id="sorting"><b>Сортировка:</b></span>

                <select value={this.state.value} onChange={this.handleChange}
                        onClick={() => showSorted()}>
                    <option value="empty">Выбрать вариант</option>
                    <option value="by-name">По названию (А - Я)</option>
                    <option value="by-name-reverse">По названию (Я - А)</option>
                </select>

                {sortingFlag && !flagFilter && !checkFilter ? (

                    value == 'empty' ? (

                        goods.map((good) => {
                            if (sortedNames.includes(good.name)) {
                                return (

                                    <ProductItem key={good.id} {...good} addToCart={addToCart}
                                                 showProduct={showProduct}/>

                                )
                            }
                        })

                    ) : (

                        <NameSorting goods={goods} sortedNames={sortedNames} value={value}
                                     addToCart={addToCart} showProduct={showProduct}/>

                    )) : (
                        null
                )}


            </>
        );

    }

}

export {GoodsSorting};