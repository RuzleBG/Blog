const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('we made it');
});

module.exports=router;