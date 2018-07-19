var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Users}=require('./models/user');
var {ToDo}=require('./models/todo');

var app=express(); 
app.use(bodyParser.json());
 app.post('/todos',(req,res)=>{
    var todo=new ToDo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
         res.status(400).send(err);
    });
 });

app.listen(3000,()=>{
    console.log('Server is up on 3000');
})

