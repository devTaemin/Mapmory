const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
//Home
app.get('/', (req,res) => res.send('Hello world!'));

//login
//logout
//register
//Mapmain
//Mapmain/category/:_category
//Mapmain/post/:_pk

app.listen(3000, ()=> console.log('Example app listening on port 3000!'));