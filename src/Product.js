import React from "react";
// import {useContext} from "react"
import "./Product.css";
import{useStateValue} from "./stateProvider"
// import CartContext from "./cart-context"
// function Product({id,title,price,rating,image}) {
//     const cartCtx = useContext(CartContext);

//     const addToBasket=(props)=>{
//         cartCtx.addItem({
//             id : props.id,
//             image : props.image,
//             price :props.price,
//             rating : props.rating
//         });
//     };
    
function Product({id,title,price,image,rating}){
    const[state,dispatch]= useStateValue();
    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating,

            },
        });
    }; 
    return(
        <div>
            <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))
                
                }
                </div>
            </div>
            <img src={image} alt="pro_img"/>
            <button onClick={addToBasket}> Add to Basket</button>
            </div>    
        </div>
    )
}
export default Product
