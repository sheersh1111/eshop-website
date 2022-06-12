import React from "react";
import "./Checkout.css";
import Checkout_product from "./Checkout_product";
import Subtotal from "./Subtotal";
import{useStateValue} from "./stateProvider";
function Checkout(){
   const[{basket},dispatch]=useStateValue();
    return( 
        <div className="checkout">
            <div className="checkout_left">
        <img src="https://th.bing.com/th/id/R.8c126cd22bbd83a2b1be38c05a6a641a?rik=wE0GaGFEdS1aFw&riu=http%3a%2f%2fwww.shakeout.org%2f2008%2fdownloads%2fShakeOut_BannerAds_DontFreak_728x90_v3.gif&ehk=3PVf9K1gtk3FnTriOXHEr5VGGsmHuanl%2f7dlqp6cKvE%3d&risl=&pid=ImgRaw&r=0" className="checkout_ad"/>
            <h2 className="checkout_title" style={{textDecoration:"none"}}>Your Shopping Basket</h2>
            
          {  basket.map(item=>(
                <Checkout_product
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
          ))
        }
         
            
            </div><div className="checkout_right">
            <Subtotal className="sub_total" /></div>
            
        </div>
   )
}
export default Checkout;