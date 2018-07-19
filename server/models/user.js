var mongoose=require('mongoose');

var Users=mongoose.model('Users',{
    Name:{
        type:String,
        required:true,
        minLength:1,
        trim:true

    },
    email:{
        type:String,
        required:true,
        minLength:1,
        trim:true
    },
    
});

module.exports={Users};
