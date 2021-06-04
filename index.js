var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('./config/passport');
//require('./config/passport');

var app = express();

// DB Setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect DB environment variable
mongoose.connect('mongodbkey입력하는곳');

// Store DB in the variable 'db'
var db = mongoose.connection;


// If DB is opened successfully
db.once('open', function(){
    console.log('DB connected');

});
// if DB is failed to open
db.on('error', function(err){
    console.log('DB ERROR : ', err);
});


// Settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({
    secret:'MySecret',
    resave:true,
    saveUninitialized:true
}));



// Passport
app.use(passport.initialize());
app.use(passport.session());


// Custom Middlewares
app.use(function(req,res,next){
    res.locals.isAuthenticated = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
});


// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'))


// Server
var port = "포트번호 입력";
app.listen(port, function(){
    console.log('server on! http://:::' + port);
});
