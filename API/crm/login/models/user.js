const mongoose = require('mongoose');
const validator = require('validator');
const jwt  = require('jsonwebtoken');

var  userSchema  =  new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    name  : {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    status : {
        type : Number, 
        default : 1
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }],
    activities : [
        {   type : Object }
       ]
});

userSchema.methods.generateAuthToken = function(){
    let user =  this;
    let  access = 'auth';
    let  token =  jwt.sign({ _id :  user._id.toHexString(),access},'abc123').toString();
    user.tokens = user.tokens.filter((f)=>{ return  f.access !=  access});
    user.tokens.push({access,token});
   return  user.save().then(()=>{
         return  token;
    });

}

var  User  =  mongoose.model('User', userSchema);

module.exports  =  User;