const express=require('express');
const router=express.Router();
const Article=require('../models/article')

router.get("/new",(req,res)=>{
    res.render("articles/new.ejs");
});

router.get('/:id',async (req,res)=>{
    const article=await Article.findById(req.params.id);
    if(article==0){
        res.redirect('/');
    }
    res.render("articles/show", {article:article})
});

router.post('/',async (req,res)=>{
    let article=new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown                
    });
try{
    new_article=await article.save();
    res.redirect(`/articles/${article.id}`);
}
    catch(e){
        console.log(e);
        res.render("articles/new", {article:article})
    }
});

module.exports=router;