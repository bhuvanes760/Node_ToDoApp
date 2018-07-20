var express=require('express');
var bodyParser=require('body-parser');

const {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var {Users}=require('./models/user');
var {ToDo}=require('./models/todo');
var app=express();
const port=process.env.PORT || 3000;


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
 
 app.get('/todos',(req,res)=>{
     ToDo.find().then((todos)=>{
         res.send({todos})
     },
     (err)=>{res.status(400).send(err)})
 });
 app.get('/todos/:id',(req,res)=>{
     var id=req.params.id;

     if(!ObjectID.isValid(id)){
    return res.status(404).send();
}
     ToDo.findById(id).then((todos)=>{
         if(!todos){
           return res.status(404).send();
         }
         res.send({todos})
     }).catch((e)=>{
    res.status(400).send(err)
     });
 });
 app.delete('/todos/:id',(req,res)=>{
     var id=req.params.id;

     if(!ObjectID.isValid(id)){
    return res.status(404).send();
}
     ToDo.findByIdAndRemove (id).the    n((todos)=>{
         if(!todos){
           return res.status(404).send();
         }
         res.send({todos})
     }).catch((e)=>{
    res.status(400).send(err)
     });
 });

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});

module.exports={app};

