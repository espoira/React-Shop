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
        showPage = Function.prototype,
        addToCart = Function.prototype,
        goBack = Function.prototype,
        clearFilters = Function.prototype,
        showFilter = Function.prototype,
        showCompany = Function.prototype,
        showProduct = Function.prototype,
        showSorted = Function.prototype,
        sortingFlag,
        checkFilter,
        flagFilter,
        flag,
        page,
    } = props;

    if (!goods.length) {
        return <h3>Ничего не найдено</h3>;
    }

    let k = 0;
    const numbers = [1, 2, 3, 4, 5];

    let shopContent = flag ? (

        <h3> <span>Акционные</span> товары </h3>

    ) : (
        <div>
            <p className="traces" id="traces">
                <span onClick={goBack}>Главная</span>
                <span onClick={() => clearFilters()}>{category}</span>
            </p>

            <h3>{category}</h3>


            <TypeFilter goods={goods} category={category} showFilter={showFilter} showCompany={showCompany} />


            <GoodsSorting goods={goods} flagFilter={flagFilter} checkFilter={checkFilter}
                          sortingFlag={sortingFlag} showSorted={showSorted} sortedNames={sortedNames}
                          addToCart={addToCart} showProduct={showProduct} />

        </div>
    );

    return (
        <div className='goods'>

            {shopContent}


            {goods.map((item) => {
                if (!flag && item.category === category) {

                    // все товары по категории на её странице с номером "page"
                    if (k >= 15 * (page - 1) && k < 15 * page && !sortingFlag && !flagFilter && !checkFilter) {

                        return (

                            <div key={item.id} className="products-list">
                                <ProductItem key={item.id} {...item} flag={flag} addToCart={addToCart}
                                             showProduct={showProduct}/>
                            </div>

                        )

                    }

                    // фильтрация по назначению товара
                    if (flagFilter && item.target === target) {

                        return (<ProductItem key={item.id} {...item} flag={flag}
                                             addToCart={addToCart} showProduct={showProduct} />)

                    }

                    // фильтрация по производителю
                    if (checkFilter && item.company === company) {

                        return (<ProductItem key={item.id} {...item} flag={flag}
                                             addToCart={addToCart} showProduct={showProduct} />)

                    }

                    // заполнение массива названиями товаров для их последующей сортировки
                    if (!sortedNames.includes(item.name)) {
                        sortedNames.push(item.name);
                    }

                    k++;

                }

                // произвольная подборка товаров на главной странице
                if (flag && item.id % 7 === 0) {

                    return (<ProductItem key={item.id} {...item} flag={flag}
                                         addToCart={addToCart} showProduct={showProduct} />)

                }


            })}


            {!flag ? (

                <div className="pages">

                    {numbers.map((number) => {

                        return (
                            <a id={`link-${number}`} className="pageNumber" onClick={() => showPage(number)}>
                                {number}
                            </a>
                        )

                    })}

                </div>

            ) : (
                null
            )}


        </div>
    );
}

export { ProductsList };
