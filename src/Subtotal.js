import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./stateProvider";
import {getBasketTotal}from "./reducer";
function Subtotal(){
   
    const[{basket},dispatch]=useStateValue();
     console.log(getBasketTotal(basket));
return(    <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <div className="subtotal_items">
                            <p>
                                Subtotal ({basket.length} items): <strong>$ {value}</strong>
                            </p>
                        </div>
                        <small className="subtotal_gift">
                           <div className="sub_check"> <input type="checkbox"/>
                            This order contains a gift</div>
                            <button> Proceed to Checkout</button>
                        </small>
                        
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                    
            />   
    </div>
)}
export default Subtotal;