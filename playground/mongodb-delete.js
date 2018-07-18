const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',{ useNewUrlParser: true },(err,client)=>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Users').deleteMany({name:'SRT'}).then((res)=>{
    //     console.log(res);
    // },(err)=>{
    //     console.log('Unable to Delete');
    // });
    // db.collection('Users').findOneAndDelete({age:37}).then((res)=>{
    //     console.log(res);
    // },(err)=>{
    //     console.log('Unable to Delete');
    // });
    db.collection('Users').deleteOne({name:'MSD'}).then((res)=>{
        console.log(res);
    },(err)=>{
        console.log('Unable to Delete');
    });
    // client.close();
});