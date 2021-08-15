import React,{useState} from 'react'
import "../css/signup.css"
import userImage from "../img/user.png"
import axios from "axios";
import {Link} from "react-router-dom"

function Signup() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handelInput=(e)=>{
        let classname=e.target.className;
        let value=e.target.value;
        
        if(classname=="input-name"){
            setName(value);
        }else if(classname=="input-email"){
            setEmail(value);
        }else{
            setPassword(value);
        }
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        const userObject = {
            name: name,
            email: email,
            password:password
        };
        axios.post('http://localhost:5000/api/signup', userObject)
        .then((response)=>{
            console.log(response.data.message);

            // <div className="alert alert-success" role="alert" style={{display:response!=undefined?"block":""}}>
            //     User created succesffully Please<Link to="/signin">Login Here</Link>
            // </div>
            if(response.data.message){
                window.location.href="/login";
            }
            

        }).catch((error)=>console.log(error));
        setName("");
        setEmail("");
        setPassword("");    
        
    }

    return (
        <>
            <div class="loginBox" style={{alignItems: "center"}}>
                <img class="user" src={userImage}/>
                <h2>Signup Here</h2>
                <form>
                    <input className="input-name" type="text"  placeholder="Enter Name" value={name} onChange={handelInput}/>
                    <input className="input-email" type="email"  placeholder="Enter Email" value={email} onChange={handelInput}/>
                    <input className="input-password" type="password" placeholder="Enter Password" value={password} onChange={handelInput}/>
                    <input type="submit" value="Sign In" onClick={handelSubmit}/>
                    <a href="#">Forget Password</a>
                </form>
            </div>
        </>
    )
}

export default Signup
