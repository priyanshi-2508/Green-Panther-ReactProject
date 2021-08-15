// basic user routes

const express=require("express");
const router=express.Router();
const { check, validationResult } = require('express-validator');
const {signin,signup,signout,protected,profile,leaderBoard} =require("../controllers/user.controller")
const auth =require("../middleware/middleware");

//signup route
router.post("/signup",
[
    check("name","name should be atleast 4 char").isLength({min:4}),
    check("email","Please provide valid email").isEmail(),
    check("password","name should be atleast 3 char").isLength({min:3})
],
signup);

//signin route
router.post("/signin",
[
    check("email","Please provide valid email").isEmail(),
    check("password","name should be atleast 3 char").isLength({min:3})
],signin);

//signout route
router.get("/signout",signout);

router.get("/leaderboard",leaderBoard)

router.get("/profile",profile);

router.use(auth);
router.post("/isProtected",protected);

module.exports=router;