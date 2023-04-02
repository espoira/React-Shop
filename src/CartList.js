import React from 'react';

function CartList(props) {
    const {
        order = [],
        goBack = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + 6 * el.price * el.quantity;
    }, 0);

    return (
        <>
            <p className="traces">
                <span onClick={goBack}>Главная</span>
                <span>Корзина</span>
            </p>

            <div className="cart">

                <h3>Корзина</h3>

                {order.length ? (
                    order.map((item) => (
                        <CartItem
                            key={item.id}
                            removeFromCart={removeFromCart}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                            {...item}
                        />
                    ))
                ) : (
                    <p>Корзина пуста</p>
                )}

                <a className="button">Оформить заказ</a>
                <span className="price">{totalPrice} ₸</span>

            </div>

        </>
    );
}

export { CartList };

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
                <img src={productImage}/>
            </div>
            <h4>{name}</h4>
            <p>{briefDescript}</p>

            <div className="button-del" onClick={() => removeFromCart(id)}></div>
            <span className="price">{valutePrice * quantity} ₸</span>
            <span>
                <b onClick={() => decQuantity(id)}>-</b>
                {quantity}
                <b onClick={() => incQuantity(id)}>+</b>
            </span>
        </div>

    );
}
