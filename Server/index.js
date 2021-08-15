require('dotenv').config(); 
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const cookieParser=require("cookie-parser");

// port 
const port=5000;
app.listen(port,(req,res)=>{
    console.log(`app is up and running on ${port}`)
})


let dbUrl=process.env.DBURL;

// mongodb connection
mongoose.connect(dbUrl,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((err)=>{
    console.log("error",err)
});

// middleware
let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 ,// For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());


// routes
const userRoute=require("./routes/user.routes");
app.use("/api",userRoute);