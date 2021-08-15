const mongoose=require("mongoose");
const { ObjectId } = mongoose.Schema;

const coinsSchema=new mongoose.Schema({
    name:{
        type:ObjectId,
        ref:"User"
    },
    coins:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Coins=mongoose.model("Coins",coinsSchema);
module.exports=Coins;