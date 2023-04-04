import React from 'react';


function ProductsList(props) {
    const {
        goods = [],
        addToCart = Function.prototype,
        goBack = Function.prototype,
        showFilter = Function.prototype,
        showProduct = Function.prototype,
        flag,
        category
    } = props;

    if (!goods.length) {
        return <h3>Ничего не найдено</h3>;
    }

    let count = 0;
    let types = [];

    let shopContent = flag ? (

        <h3> <span>Акционные</span> товары </h3>

    ) : (
        <div>
            <p className="traces" id="traces">
                <span onClick={goBack}>Главная</span>
                <span>{category}</span>
            </p>

            <h3>{category}</h3>

            {goods.map((item) => {
                if (item.category === category) {

                    if (!types.includes(item.target)) {
                        types.push(item.target);

                        return (
                            <span className="types-filter" onClick={showFilter}>
                                {item.target}
                            </span>
                        )
                    }

                }
            })}

            <div className="filters">
                <p>Подбор по параметрам:</p>

                <span>Производитель</span>
                <input type="text" placeholder="Поиск..." />



                {types.map((item) => {
                    console.log(item);
                    return (<p>{item}</p>)
                })}

            </div>
        </div>
    );

    return (
        <div className='goods'>

            {shopContent}

            {goods.map((item) => {
                if (!flag && item.category === category) {

                    types.push(item.target);
                    return (

                        <div className="products-list">
                            <ProductsItem key={item.id} {...item} flag={flag} addToCart={addToCart} showProduct={showProduct} />
                        </div>

                    )

                }

                if (flag && item.id % 5 === 0) {

                    return (<ProductsItem key={item.id} {...item} flag={flag} addToCart={addToCart} showProduct={showProduct} />)

                }

            })}
        </div>
    );
}

export { ProductsList };


function ProductsItem(props) {
    const {
        id,
        name,
        company,
        brand,
        price,
        weight,
        volume,
        size,
        description,
        target,
        addToCart = Function.prototype,
        showProduct = Function.prototype,
        flag,
    } = props;


    const productImage = '/goods/image_' + id + '.png';

    return (

        <div className='card'>

            {flag ? (<span className="popular">ПОПУЛЯРНОЕ</span>) : <> </>}

            <div className="product-picture">
                <img src={process.env.PUBLIC_URL + productImage} alt={name} />
            </div>

            <div className='card-action'>
                <a className='btn-buy'
                   onClick={() =>
                       addToCart({
                           id,
                           name,
                           description,
                           price,
                       })
                   }
                > В КОРЗИНУ </a>

                <span className='card-price'>
                    {6*price} ₸
                </span>
            </div>

            <div className='card-content'>
                <h5 onClick={() => showProduct(id)}> {name} </h5>
                <p><span>Штрихкод: </span>{id * 3* Math.pow(10,4) + 200 + id + Math.pow(10,6)}</p>
                <p><span>Производитель: </span>{company}</p>
                <p><span>Брэнд: </span>{brand}</p>
            </div>

        </div>

    );
}

export { ProductsItem };
