const express = require('express');
const booksRouter = express.Router();
const app = new express();
const logRouter = require('./routes/logRoutes');
const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+ '/views');
app.use('/login',logRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        
    });
});


app.listen(port,()=>{console.logRouter("Server Ready at" + port)});
