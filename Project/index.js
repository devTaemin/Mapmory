const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('body-parser');
const app = express();

// DB Setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect DB environment variable
mongoose.connect('mongodb+srv://Mapmory_admin:admin@cluster0.ncnjj.mongodb.net/Project-Mapmory?retryWrites=true&w=majority');

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

// Routes
app.use('/', require('./routes/home'));

var port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:' + port);
});
