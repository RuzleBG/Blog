const mongoose=require('mongoose');
const article=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    markdown:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
    
});

module.exports=mongoose.model('article', article);