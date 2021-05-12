const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const mySql = require('mysql');

const pool = mySql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mapmory',
    debug: false
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));


app.use(bodyParser.json());

app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
 }));

//Home page
app.get('/', function(req,res){
    res.render("index.html");
})

//Login page
app.get('/login', function(req,res){
    res.render("login.html");
})

//login
app.put('/login',function(req,res){
    res.send("login.html");
})

//logout
app.put('/logout',function(req,res){
    res.send("Logout page");
})

//register

app.get('/register', function(req,res){
    res.send("register.html");
})

app.post('/register',function(req,res){
    console.log('/register 호출됨');

    var user = {
        'ID': req.body.id,
        'PWD': req.body.pwd,
        'NAME': req.body.name
    }
    console.log('ID: ' + user.id + ', PWD: ' + user.PWD + ', NAME: ' + user.NAME);
    


    //connection.query('INSERT INTO USER SET ?', user, function(error, results, fields))
    res.send('Register page');
})

//Mapmain
app.get('/Mapmain',function(req,res){
    res.send('Mapmain page');
})

//Read post
app.get('/Mapmain/posts/:postId',function(req,res){
    var postId = req.params.postId;
    res.send("Mapmain post page " + postId);
})

//Create post
app.post('/Mapmain/posts',function(req,res){
    res.send("Mapmain create page");
})

//Update post
app.put('/Mapmain/posts/:postId',function(req,res){
    var postId = req.params.postId;
    res.send("Mapmain update page " + postId);
})

//Delete post
app.delete('/Mapmain/posts/:postId',function(req,res){
    var postId = req.params.postId;
    res.send("Mapmain delete page " + postId);
})
//Mapmain/category/:_category
//Mapmain/post/:_pk

app.listen(3000, ()=> console.log('Example app listening on port 3000!'));