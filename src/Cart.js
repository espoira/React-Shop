import React from 'react';

function Cart(props) {
    const { quantity = 0, pricesSum, handleCartShow = Function.prototype } = props;
    return (
        <div id='cart'>
            <i className="cart-icon" onClick={handleCartShow}></i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
            <span>Корзина<br/>
		      <b className="price">{pricesSum} ₸</b>
		    </span>

        </div>
    );
}
export { Cart };