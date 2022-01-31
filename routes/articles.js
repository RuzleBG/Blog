const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('we made it');
});
router.get('/new',(req,res)=>{
    res.render("articles/new.ejs");
});
router.post('/',(req,res)=>{
    
})

module.exports=router;