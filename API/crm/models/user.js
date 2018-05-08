const mongoose = require('mongoose');
const validator = require('validator');


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

var  User  =  mongoose.model('User', userSchema);

module.exports = {User}