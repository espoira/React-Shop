import React from 'react';
import {ProductsList} from "./ProductsList";

function ProductInfo(props) {
    const {
        id,
        goods,
        addToCart = Function.prototype,
        goBack = Function.prototype
    } = props;


    return (
        <>
            <p className="traces">
                <span onClick={goBack}>Главная</span>
                <span>Каталог</span>
            </p>

            <div className="product-info">
                <img src="pic_09.jpg"/>

                <div>
                    <i>В наличии</i>
                    <h2>BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот</h2>

                    <span className="price">48,76 ₸</span>
                    <span><b>-</b>1<b>+</b></span>
                    <div className="button" id="btn-in-cart" onClick={addToCart}>В корзину</div>

                </div>
            </div>

        </>
    );
}
export { ProductInfo };