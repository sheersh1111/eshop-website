import React,{useState} from "react";
import"./Login.css"
import {Link ,useHistory} from "react-router-dom";
import Storefront from "@material-ui/icons/Storefront";
import { auth } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Store } from "@material-ui/icons";
function Login(){
    const history= useHistory();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const signIn= e=>{
        e.preventDefault();
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then(userCredential=>{
                const user = userCredential.user;
                history.push("/");
            })
            .catch(error=>alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential=>{
                
                    const user = userCredential.user;
                    history.push("/");
                
            })
            .catch(error=>alert(error.message))
    }
    return(
        <div className="login">
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="login_logo">
                    <Storefront className="login_logoImage" fontSize="large"/>
                    <h2 className="login_logoTitle">eShop</h2>
                </div>
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
               <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit" className="login_signinButton" onClick={signIn}>Sign-in</button>
                </form>
                <p>
                    By signing in you agree to the esop website  conditions  of use & sale . Please see our 
                    Privacy Notice , Our Cookies Notice and our Interest-Based Ads  Notice .
                </p>
                <button className="login_registerButton" onClick={register}>Create your eshop account</button>
            </div>


        </div>
    )
}
export default Login;