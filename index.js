const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = require('./Router/router');
app.set('view-engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
mongoose.connect('mongodb://localhost/Blogs',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});
const db = mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Connected to database'));

app.use('/blog',router);
app.listen(3000,()=>console.log('Server started'));
