import React from 'react';
import { TypeFilter } from './TypeFilter';
import { ProductItem } from './ProductItem';
import {GoodsSorting} from "./GoodsSorting";

function ProductsList(props) {
    const {
        goods,
        category,
        target,
        company,
        sortedNames,
        addToCart = Function.prototype,
        goBack = Function.prototype,
        showFilter = Function.prototype,
        showCompany = Function.prototype,
        showProduct = Function.prototype,
        showSorted = Function.prototype,
        sortingFlag,
        flagFilter,
        filter,
        flag,
    } = props;

    if (!goods.length) {
        return <h3>Ничего не найдено</h3>;
    }


    let shopContent = flag ? (

        <h3> <span>Акционные</span> товары </h3>

    ) : (
        <div>
            <p className="traces" id="traces">
                <span onClick={goBack}>Главная</span>
                <span>{category}</span>
            </p>

            <h3>{category}</h3>


            <TypeFilter goods={goods} category={category} showFilter={showFilter} showCompany={showCompany} />


            <span id="sorting" onClick={() => showSorted()}><b>Сортировка:</b></span>

            <select>
                <option onChange={() => showSorted()} value="by-name">По названию</option>
                <option onChange={() => showSorted()} value="by-name-reverse">В обратном порядке</option>
            </select>

            {sortingFlag && !flagFilter && !filter ? (

                sortedNames.sort().map((goodName) => {

                    return goods.map((good) => {
                        if (good.name === goodName) {
                            return (

                                <ProductItem key={good.id} {...good} addToCart={addToCart} showProduct={showProduct}/>

                            )
                        }
                    })

                })

            ) : (
                null
            )}


        </div>
    );

    return (
        <div className='goods'>

            {shopContent}


            {goods.map((item) => {
                if (!flag && item.category === category && !sortingFlag && !flagFilter && !filter) {

                    if (!sortedNames.includes(item.name)) {
                        sortedNames.push(item.name);
                    }

                    return (

                        <div key={item.id} className="products-list">
                            <ProductItem key={item.id} {...item} flag={flag} addToCart={addToCart} showProduct={showProduct} />
                        </div>

                    )

                }

                if (flag && item.id % 7 === 0) {

                    return (<ProductItem key={item.id} {...item} flag={flag} addToCart={addToCart} showProduct={showProduct} />)

                }

                if (flagFilter && item.target === target && item.category === category) {

                    return (<ProductItem key={item.id} {...item} flag={flag} addToCart={addToCart} showProduct={showProduct} />)

                }

                if (filter && item.company === company && item.category === category) {

                    return (<ProductItem key={item.id} {...item} flag={flag} addToCart={addToCart} showProduct={showProduct} />)

                }

            })}

        </div>
    );
}

export { ProductsList };
