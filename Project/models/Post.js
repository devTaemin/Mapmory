const mongoose = require('mongoose');


// Declare the schemea of post
var postSchema = mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String, required:true},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date},
});


// Declare the variable
var Post = mongoose.model('post', postSchema);


// Export module
module.exports = Post;