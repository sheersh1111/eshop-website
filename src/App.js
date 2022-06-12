import React from 'react';
import Header from "./header"
import Home from "./home"
import Checkout from "./Checkout" 
import Login from "./Login"
//import CartProvider from "./CartProvider"
import{BrowserRouter as Router,Route,Switch} from "react-router-dom";

const App = () =>{
  return ( 
    // <CartProvider>
    //   <p>Inside App.js</p>
      // <Header/>
      // <Home/>
       <Router>
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/" > 
            <Header/>
             <Home/> 
           </Route> 
        </Switch>
       </Router> 
       
    /* </CartProvider> */
  );
}

export default App;
