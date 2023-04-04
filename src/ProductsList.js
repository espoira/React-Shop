import React from 'react';
import { TypeFilter } from './TypeFilter';
import { ProductItem } from './ProductItem';

function ProductsList(props) {
    const {
        goods = [],
        category,
        target,
        company,
        addToCart = Function.prototype,
        goBack = Function.prototype,
        showFilter = Function.prototype,
        showCompany = Function.prototype,
        showProduct = Function.prototype,
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

        </div>
    );

    return (
        <div className='goods'>

            {shopContent}


            {goods.map((item) => {
                if (!flag && item.category === category && !flagFilter && !filter) {

                    return (

                        <div className="products-list">
                            <ProductItem key={item.id} {...item} flag={flag} addToCart={addToCart} showProduct={showProduct} />
                        </div>

                    )

                }

                if (flag && item.id % 5 === 0) {

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
