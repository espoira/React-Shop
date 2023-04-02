import React from 'react';

function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props;
    return (
        <div id='cart'>
            <i className="cart-icon" onClick={handleCartShow}></i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
            <span>Корзина<br/>
		      <b className="price">Цена</b>
		    </span>

        </div>
    );
}
export { Cart };