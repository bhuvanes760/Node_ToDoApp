const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',{ useNewUrlParser: true },(err,client)=>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('ToDos').find({_id:new ObjectID('5b4f07da1769ef5f34f5f7a2')}).toArray().then((docs)=>{
    //     console.log('ToDos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{ 
    //     console.log('Unable to fetch',err);
    // });
    // db.collection('ToDos').find().count().then((docs)=>{
    //     console.log('ToDos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{ 
    //     console.log('Unable to fetch',err);
    // });
    db.collection('Users').find({name:'MSD'}).toArray().then((docs)=>{
        console.log('User');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{ 
        console.log('Unable to fetch',err);
    });
    // client.close();
});