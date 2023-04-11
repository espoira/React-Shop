import React from 'react';
import {CartItem} from "./CartItem";

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
