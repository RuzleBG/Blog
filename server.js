const { urlencoded } = require('express');
const express=require('express');
const mongoose=require('mongoose');
const Article=require('./models/article');
const articleRouter=require('./routes/articles');
const methodOverride=require('method-override');

mongoose.connect("mongodb://localhost/blog");

const app=express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended:false,
}));
app.use(methodOverride('_method'));

app.get('/',async (req,res)=>{
    const articles= await Article.find().sort({createdAt: 'desc'});
    res.render('index',{articles:articles});
});

app.use('/articles',articleRouter);

app.listen(5000,()=>{
    console.log("Server Started on Port 5000")
});