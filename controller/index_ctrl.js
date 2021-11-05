const express = require ("express");
const router = express.Router();

router.get ("/", (req,res)=>{
    res.render("index",{
         menu:"index"
    
    });

});
module.exports = router ;