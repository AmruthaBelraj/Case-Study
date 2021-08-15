const express = require('express');
const logRouter = express.Router();
logRouter.post('/',function(req,res){
    res.render("login",{
        name: req.body.name
    });
});

module.exports = logRouter;