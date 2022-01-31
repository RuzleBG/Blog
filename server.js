const { urlencoded } = require('express');
const express=require('express');
const mongoose=require('mongoose');
const articleRouter=require('./routes/articles');

mongoose.connect("mongodb://localhost/blog");

const app=express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended:false
}))

app.get('/',(req,res)=>{
    const articles=[{
        title:'Test Article',
        createdAt: new Date(),
        description: "Test Description"
    }];
    res.render('index',{articles:articles});
});

app.use('/articles',articleRouter);

app.listen(5000,()=>{
    console.log("Server Started on Port 5000")
});