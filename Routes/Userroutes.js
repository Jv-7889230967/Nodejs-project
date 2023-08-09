const express=require("express");
const router=express.Router();
const {Signup,Login}=require("../Controllers/Usercontrollers")

router.route("/").post(Signup).get(Login);
module.exports=router;
