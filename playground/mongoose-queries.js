const {mongoose}=require('./../server/db/mongoose');
const {ToDo}=require('./../server/models/todo');
const {Users}=require('./../server/models/user');
const {ObjectID}=require('mongodb');
var id='5b501aa9ba39f007a57a0bd6';
if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}
// ToDo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('ToDos',todos);
// });
Users.find({
    _id:id
}).then((user)=>{
    console.log('User',user);
});
// ToDo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('ToDo',todo);
// });
Users.findOne({
    _id:id
}).then((users)=>{
    console.log('User',users);
});
Users.findById(id).then((user)=>{
    if(!user){
        return console.log('ID not found');
    }   
    console.log('ToDo By ID',user);
   }).catch((e)=>console.log(e));