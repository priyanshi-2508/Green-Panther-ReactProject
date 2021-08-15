import Cookies from 'universal-cookie';
import React,{useState} from 'react'
import "../css/signin.css"
import userImage from "../img/user.png"

let axios=require("axios");


function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handelInput=(e)=>{
        let classname=e.target.className;
        let value=e.target.value;
        
        if(classname=="input-email"){
            setEmail(value);
        }else{
            setPassword(value);
        }
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        try {
            const userObject = {
                email:email,
                password:password
            };
            axios.post('http://localhost:5000/api/signin', userObject)
            .then((response)=>{
                console.log(response);
                if(response.data.message){
                    window.location.href="/";
                }

                const user=response.data.user;
                console.log(user._id);
                const userId=user._id;
                localStorage.setItem("userId", userId);
                
            }).catch((error)=>console.log(error));
            
            console.log("user signined");
            setEmail("");
            setPassword("");    
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div class="loginBox" style={{alignItems: "center"}}>
                <img class="user" src={userImage}/>
                <h2>Log In Here</h2>
                <form>
                    <input className="input-email" type="email"  placeholder="Enter Email" value={email} onChange={handelInput}/>
                    <input className="input-password" type="password" placeholder="Enter Password" value={password} onChange={handelInput}/>
                    <input type="submit" value="Login In" onClick={handelSubmit}/>
                </form>
            </div>
    )
}

export default Login
