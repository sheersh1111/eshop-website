import { Title } from "@material-ui/icons";
import React from "react";
import "./home.css"
import Product from "./Product"
function Home(){
    return(
        <div>   
            <div className="home">
                <div className="home_container">
                    <img src="https://1.bp.blogspot.com/-qMYIDpwqMZc/XjlvtE0tKpI/AAAAAAAAB9s/PkILC627htAym3u4eyr0H6Hemi95QtoFACNcBGAsYHQ/w1200-h630-p-k-no-nu/E-Commerce.png" alt="" className="home_image"/>
                    <div className="home_row1">
                       <div className="p1">
                       <Product  
                        id="1"
                        title="Bennet mystic 15.6 inch laptop"
                        price={11.96}
                        image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                        rating= {2}
                        
                        />
                       </div>
                        <div className="p1">
                        <Product 
                         id="2"
                         title="Hunterspider Gaming Headset Headphones for PS4 PS5 Switch Xbox One PC with Microphone, Noise Reduction 7.1 Surround Sound & LED Light (Red)"
                         price={19.98}
                         image="https://m.media-amazon.com/images/I/71fyGxZjVvL._AC_SX425_.jpg"
                         rating= {4}
                        
                         />
                        </div>
                    </div>
                    <div className="home_row2">
                    <div className="p2">
                    <Product 
                    id="3"
                    title="Men's Running Shoes Blade Tennis Walking Fashion Sneakers Breathable Non Slip Gym Sports Work Trainers"
                    price ={38.99}
                    image="https://m.media-amazon.com/images/I/71YQNz3uzyL._AC_UY500_.jpg"
                    rating=  {4}
                    />
                    </div>
                    <div className="p2">
                        <Product 
                    id="4"
                    title="Maui Jim Kawika Square Sunglasses"
                    price ={300.00}
                    image="https://m.media-amazon.com/images/I/61evRqAjaIL._AC_UX679_.jpg"
                    rating= {3}
                    
                    />
                    </div>
                    <div className="p2">
                    <Product 
                    id="5"
                    title="Hanes Men's Full-Zip Eco-Smart Hoodie"
                    price ={15.99}
                    image="https://m.media-amazon.com/images/I/81J68mEs6NL._AC_UX522_.jpg"
                    rating= {5}
                    
                    />
                    </div>
                    </div>
                    <div className="home_row3">
                    <div className="p3">
                    <Product
                    id={6}
                    title="MAGNIVIT Men's Cargo Shorts with 5 Pockets 3/4 Below Knee Hiking Mountain Bike Shorts"
                    price ={28.98}
                    image="https://m.media-amazon.com/images/I/61Z9oV+qKGS._AC_UX522_.jpg"
                    rating= "4"
                    
                    />
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home;
