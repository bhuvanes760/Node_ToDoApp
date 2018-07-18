const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // db.collection('ToDos').insertOne({
    //     text:'HelloWorld',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //     return console.log('Unable to Insert',err);
    // }
    // console.log(JSON.stringify(result.ops,undefined,2));
    db.collection('Users').insertOne({
       name:'MSD',
       age:37,
       location:'Ranchi'
    },(err,result)=>{
        if(err){
        return console.log('Unable to Insert',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // console.log(result.ops[0]._id.getTimestamp());
    });
    
    client.close();
});