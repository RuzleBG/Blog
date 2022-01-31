const express=require('express');
const article = require('../models/article');
const router=express.Router();
const Article=require('../models/article')

router.get("/new",(req,res)=>{
    res.render("articles/new.ejs");
});
router.get("/edit/:id",async (req,res)=>{
    const article=await Article.findById(req.params.id);
    res.render("articles/edit.ejs",{article:article});
});

router.get('/:slug',async (req,res)=>{
    const article=await Article.findOne({slug:req.params.slug});
    if(article==0){
        res.redirect('/');
    }
    res.render("articles/show", {article:article})
});

router.post('/',async (req,res,next)=>{
    req.article=new Article()
    next();
}, saveArticleAndRedirect('new'));

router.post('/:id',async (req,res,next)=>{
    req.article=await article.findById(req.params.id);
    next();
}, saveArticleAndRedirect('/edit'));

router.delete('/:id', async(req,res)=>{
await Article.findByIdAndDelete(req.params.id);
res.redirect("/");
});

 function saveArticleAndRedirect(path){
    return async(req,res)=>{
            let article=req.article;
            article.title= req.body.title;
            article.description= req.body.description;
            article.markdown=req.body.markdown;                
           
        try{
            new_article=await article.save();
            res.redirect(`/articles/${article.slug}`);
        }
            catch(e){
                console.log(e);
                res.render(`/articles/${path}`, {article:article})
            }
    }
}

module.exports=router;