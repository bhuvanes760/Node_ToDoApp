const {mongoose}=require('./../server/db/mongoose');
const {ToDo}=require('./../server/models/todo');
const {Users}=require('./../server/models/user');
const {ObjectID}=require('mongodb');

// ToDo.remove({}).then((results)=>{
//     console.log(results);
// });

ToDo.findByIdAndRemove('5b5167f053bad21d90e0538e').then((todo)=>{
    console.log(todo);
});

ToDo.findOneAndRemove({_id:'5b5167f653bad21d90e0538f'}).then((todo)=>{
    console.log(todo);
});