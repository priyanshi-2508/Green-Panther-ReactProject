// signin and signup

const User=require("../models/User");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { check, validationResult } = require('express-validator');


const signup= async(req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
    
    const {name,email,password}=req.body;
    try {
        const isUser=await User.findOne({email});
        if(isUser){
            console.log(isUser);
            return res.status(400).json({
                message:"User already exsist"
            })
        } 

        const user=new User(req.body);
        const hashPaswword=await bcrypt.hash(password,8);
        user.password=hashPaswword;
        await user.save();
        const token=await generateToken(user);
        user.password=undefined;
        res.cookie('token', token,{maxAge:1000*60*60*24,httpOnly:true});
        return res.status(200).json({
            message:"User registered successfully",
            user,
            token
        })
        // res.redirect("/");
    } catch (error) {
        res.send(500).json({
            message:"Something went wrong"
        })
    }
}
const generateToken=async(user)=>{
    // console.log(user,"49");
    const token=await jwt.sign(({_id:user._id.toString()}),"newuser");
    return token;
}

const signin=async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }

    const {email,password}=req.body;
    try {
        const user=await findByCredentials(email,password,res);
        const token=await generateToken(user);
        user.password=undefined;
        res.cookie('token', token,{maxAge:1000*60*60*24,httpOnly:true});
        return res.status(200).json({
            message:"User signined successfully",
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Something went wrong"
        })
    }
}

const findByCredentials=async (email,password,res)=>{
    try {
        const user=await User.findOne({email});
        console.log(user,"86")
        if(!user){
            return res.json(400).status({
                message:"Email invalid"
            })
        }

        const isMatch=await bcrypt.compare(password,user.password);
        console.log("94",isMatch);
        if(!isMatch){
            return res.status(401).json({
                messgae:"Password is incorrect"
            })
        }
        console.log("98");
        return user;
    } catch (error) {
        return res.status(401).json({
            messgae:"Something went wrong"
        })
    }
}

const signout=(req,res)=>{
    localStorage.removeItem("userId");
    res.json({
        message:"user signout"
    });
}

const protected=(req,res)=>{
    res.status(200).json({
        messgae:"this is a protected route",
        token:req.cookies.token,
        cookie:req.cookies
    })
}

const profile=async(req,res)=>{
    try {
        const userId=req.query.userId;
        const user=await User.findById({_id:userId});
        if(user){
            user.password=undefined;
            res.status(200).json({
                message:"User found",
                user:user
            })
        }    
    } catch (error) {
        return res.status(404).json({
            error:error
        })
    }
    
}

const leaderBoard=async (req,res)=>{
    try{
        const user=await User.find();
        res.status(200).json({
            messgae:"All users data",
            user:user
        });
    }
    catch(error){
        res.status(404).json({
            error:"Something went wrong"
        })
    }
}

module.exports={signin,signup,signout,protected,profile,leaderBoard};