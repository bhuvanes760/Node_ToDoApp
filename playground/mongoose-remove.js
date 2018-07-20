const {mongoose}=require('./../server/db/mongoose');
const {ToDo}=require('./../server/models/todo');
const {Users}=require('./../server/models/user');
const {ObjectID}=require('mongodb');

// ToDo.remove({}).then((results)=>{
//     console.log(results);
// });

ToDo.findByIdAndRemove('5b517af8fb6fc069480ff2ed').then((todo)=>{
    console.log(todo);
});

ToDo.findOneAndRemove({_id:'5b517b65fb6fc069480ff313'}).then((todo)=>{
    console.log(todo);
});