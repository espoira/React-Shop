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
        clearFilters = Function.prototype,
        showFilter = Function.prototype,
        showCompany = Function.prototype,
        showProduct = Function.prototype,
        showSorted = Function.prototype,
        sortingFlag,
        flagFilter,
        filter,
        flag,
        page,
    } = props;

    if (!goods.length) {
        return <h3>Ничего не найдено</h3>;
    }

    let k = 0;

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


            <GoodsSorting goods={goods} sortingFlag={sortingFlag} flagFilter={flagFilter} filter={filter}
                          showSorted={showSorted} sortedNames={sortedNames} />

        </div>
    );

    return (
        <div className='goods'>

            {shopContent}


            {goods.map((item) => {
                if (!flag && item.category === category && k >= 15 * (page - 1) && k < 15 * page
                    && !sortingFlag && !flagFilter && !filter) {

                    if (!sortedNames.includes(item.name)) {
                        sortedNames.push(item.name);
                    }

                    k++;

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
