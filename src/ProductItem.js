import React from "react";

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
        description,
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

export { ProductItem };