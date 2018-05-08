const mongoose = require('mongoose');


var  bucketSchma = new mongoose.Schema({

    name  : {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        
    },
    isActive  : {
        type : Boolean,
        default : true
    },
    activities : [
     {   type : Object }
    ]
});

var Bucket = mongoose.model('Bucket', bucketSchma);

module.exports = {Bucket}