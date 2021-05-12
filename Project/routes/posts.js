const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Post home
router.get('/', function(req, res){
    Post.find({})
    .sort('-createdAt')
    .exec(function(err, posts){
        if(err){return res.json(err)};
        res.render('posts/index', {posts:posts});
    });
});


// Post new
router.get('/new', function(req, res){
    res.render('posts/new');
})


// Post create
router.post('/', function(req, res){
    Post.create(req.body, function(err, post){
        if(err){return res.json(err)};
        res.redirect('/posts');
    });
});


// Post show
router.get('/:id', function(req, res){
    Post.findOne({_id:req.params.id}, function(err, post){
        if(err){return res.json(err)};
        res.render('posts/show', {post:post});
    });
});


// Post edit
router.get('/:id/edit', function(req, res){
    Post.findOne({_id:req.params.id}, function(err, post){
        if(err){return res.join(err)};
        res.render('posts/edit', {posts:post});
    });
});


// Post update
router.get('/:id', function(req, res){
    req.body.updatedAt = Date.now();
    Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err, post){
        if(err){return res.join(err)};
        res.redirect('posts/' + req.params.id);
    });
});


// Post delete
router.delete('/:id', function(req, res){
    Post.deleteOne({_id:req.params.id}, function(err){
        if(err){return res.join(err)};
        res.redirect('/posts');
    });
});


// Export module
module.exports = router;