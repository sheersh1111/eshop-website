import React from "react";
import "./Checkout_product.css";
import {useStateValue} from "./stateProvider"
function Checkout_product({id,price,title,image,rating}){
    const [{basket},dispatch]= useStateValue();
    const removeFromBasket= () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id :id,
        });
    };
    return(
        <div className="checkoutProduct">
        <img src={image} className="checkoutProduct_image"/>
        <div className="checkoutProduct_info">
            <p  className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price"><small>$</small><strong>{price}</strong></p>
            <div className="checkoutProduct_rating">{
                Array(rating)
                .fill()
                .map((_,i)=>
                    <p>⭐</p>
                    )
            }</div>
            <button onClick={removeFromBasket}>REMOVE FROM BASKET</button>
        </div>
    </div>
)}
export default Checkout_product;