const express=("express");
const router=express.Router()
const newsController=require("../controller/newscontroller.js")


router.get("/getnews",newsController.getnews)

module.exports=router
