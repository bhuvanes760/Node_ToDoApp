const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',{ useNewUrlParser: true },(err,client)=>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('ToDos').findOneAndUpdate({_id:new ObjectID('5b4f1166a710d95f34e97111')},{$set:{
    //     completed:true
    // }},{returnOriginal:false}).then((res)=>{
    //     console.log(res);
    // });
    // db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b4f2138a710d95f34e97117')},{$set:{
    //     name:'SRT',age:40,location:'Mumbai'
    // }},{returnOriginal:'MSD'}).then((res)=>{
    //     console.log(res);
    // });
    db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b4f2134a710d95f34e97116')},
    {$set:{name:'SRT MB',location:'Mumbai,India'},
    $inc:{age: 1}},
    {returnOriginal:'MSD'}).then((res)=>{
        console.log(res);
    });
    // client.close();
});