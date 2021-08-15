const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trime:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    coins:{
        type:Number,
        default:0
    }
},
{timestamps:true});

const User=mongoose.model("User",userSchema);
module.exports=User;