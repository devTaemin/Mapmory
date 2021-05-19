const mongoose = require('mongoose');


// Declare the schemea of post
var postSchema = mongoose.Schema({
    title:{type:String, required:[true, 'Title is required!']},
    body:{type:String, required:[true, 'Content is required!']},
    author:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date},
});


// Declare the variable
var Post = mongoose.model('post', postSchema);


// Export module
module.exports = Post;