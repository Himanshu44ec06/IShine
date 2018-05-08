const mongoose = require('mongoose');

var  leadSchema  = new mongoose.Schema({
     title  : {
         type : String
     },
     expectedprice  : {
         type : Number
     },
     expectedclosingdate  : {
         type : Date
    },
    priority  : {
        type :  Number
    },
    metadata :[{
        info : {type: Object}
    }],
    internalnotes : [{
         message  :  { type : String},
         user  : { type : object}   
    }],
    followers  : [{
        user : {type: Object}
    }],
    activities : [{
        activity : { type : Object}
    }]
});

var Lead  =  mongoose.model('Lead',leadSchema);

module.exports = {Lead};