const express=require("express");
const router=express.Router();
const {Create, Update, All, Search, Delete}=require("../Controllers/Datacontrollers");

router.route("/create").post(Create);
router.route("/update/:id").put(Update)
router.route("/All").get(All);
router.route("/search/:id").get(Search)
router.route("/delete/:id").delete(Delete);

module.exports=router;