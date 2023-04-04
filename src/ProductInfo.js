import React from 'react';


function ProductInfo(props) {
    const {
        goods,
        goodId,
        addToCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
        goBack = Function.prototype
    } = props;


    return (
        <>
            {goods.map((item) => {
                if (item.id === goodId) {

                    return (

                        <ProductItem key={item.id} {...item} addToCart={addToCart}
                                     incQuantity={incQuantity} decQuantity={decQuantity} goBack={goBack} />

                    )
                }
            })}

        </>
    );
}
export { ProductInfo };



function ProductItem(props) {
    const {
        id,
        name,
        company,
        brand,
        price,
        weight,
        volume,
        size,
        target,
        category,
        description,
        addToCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
        goBack = Function.prototype
    } = props;


    const productImage = '/goods/image_' + id + '.png';

    return (
        <>
            <p className="traces">
                <span onClick={goBack}>Главная</span>
                <span>{category}</span>
                <span>{name}</span>
            </p>

            <div className="product-info">
                <div>
                    <img src={process.env.PUBLIC_URL + productImage} alt={name} />
                </div>

                <div>
                    <i>В наличии</i>
                    <h2>{name}</h2>

                    <span className="price">{price * 6} ₸</span>
                    <span>
                        <b onClick={() => decQuantity(id)}>-</b>
                        1
                        <b onClick={() => incQuantity(id)}>+</b>
                    </span>
                    <div className="button">В корзину</div>

                    <p><br/>Производитель: <strong>{company}</strong></p>
                    <p>Брэнд: <strong>{brand}</strong></p>
                    <p>Артикул: <strong>{id}</strong></p>
                    <p>Штрихкод: <strong>{id * 3* Math.pow(10,4) + 200 + id + Math.pow(10,6)}</strong></p>

                    <h6>Описание</h6>
                    <p id="description">{description}</p>

                    <h6>Характеристики</h6>
                    <p>Назначение: <strong>{target}</strong></p>
                    <p>Тип: <strong>{category}</strong></p>
                    <p>Производитель: <strong>{company}</strong></p>
                    <p>Брэнд: <strong>{brand}</strong></p>
                    <p>Артикул: <strong>{id}</strong></p>
                    <p>Штрихкод: <strong>{id * 3* Math.pow(10,4) + 200 + id + Math.pow(10,6)}</strong></p>
                    <p>Вес: <strong>{weight}</strong></p>
                    <p>Кол-во в коробке: <strong>{}</strong></p>

                </div>

            </div>

        </>

    );
}

export { ProductItem };

