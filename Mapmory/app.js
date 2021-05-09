const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
 }));

//Home
app.get('/', function(req,res){
    res.send("Home page");
})
//login
app.put('/login',function(req,res){
    res.send("Login page");
})
//logout
app.put('/logout',function(req,res){
    res.send("Logout page");
})
//register
app.post('/register',function(req,res){
    res.send('register page');
})
//Mapmain
app.get('/Mapmain',function(req,res){
    res.send('Mapmain page');
})
//Read post
app.get('/Mapmain/posts/:postId',function(req,res){
    var postId = req.params.postId;
    res.send("Mapmain post page", postId);
})
//Create post
app.post('/Mapmain/posts',function(req,res){
    res.send("Mapmain create page");
})
//Update post
app.put('/Mapmain/posts/:postId',function(req,res){
    var postId = req.params.postId;
    res.send("Mapmain update page");
})
//Delete post
app.delete('/Mapmain/posts/:postId',function(req,res){
    var postId = req.params.postId;
    res.send("Mapmain update page");
})
//Mapmain/category/:_category
//Mapmain/post/:_pk

app.listen(3000, ()=> console.log('Example app listening on port 3000!'));