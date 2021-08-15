// authorization module

const User=require("../models/User");
const jwt=require("jsonwebtoken");

const auth=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        // const token=req.header("Authorization").replace("Bearer ","");
        const decode=jwt.verify(token,process.env.SECRET_KEY);
        console.log(decode);
        const user=await User.findOne({_id:decode._id});
        if(!user){
            return res.status(401).json({
                message:"Please authenticate",
            })

        }
        req.token=token;
        res.user=user;
        next();
    } catch (error) {
        res.status(500).json({
            error:"Something went wrong",
        });
    }
}

module.exports=auth;