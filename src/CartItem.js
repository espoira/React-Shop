import React from 'react';

function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        description,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const productImage = '/goods/image_' + id + '.png';
    const briefDescript = description.split('.')[0] + '.' +  description.split('.')[1] + '.';
    const valutePrice = 6 * price;

    return (

        <div className="product-item">
            <div className="product-picture">
                <img src={process.env.PUBLIC_URL + productImage}/>
            </div>

            <div className="info">
                <h4>{name}</h4>
                <p>{briefDescript}</p>
            </div>

            <div>
                <div className="button-del" onClick={() => removeFromCart(id)}></div>
                <span className="price">{valutePrice * quantity} ₸</span>
                <span>
                <b onClick={() => decQuantity(id)}>-</b>
                    {quantity}
                    <b onClick={() => incQuantity(id)}>+</b>
            </span>
            </div>
        </div>

    );
}

export { CartItem };