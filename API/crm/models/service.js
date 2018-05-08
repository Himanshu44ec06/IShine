const mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({

    name :{
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
var Service = mongoose.model('Service', serviceSchema);

module.exports = {Service}