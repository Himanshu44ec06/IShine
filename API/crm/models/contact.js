const mongoose = require('mongoose');

var   contactSchema  = new mongoose.Schema({
    isactive : {
        type: String
    },
    name  : {
        type: String
    },
    contacttype  : {
        type :  Number , //  1-  individual,  2 - company 
    },
    companyname  : {
        type : String
    },
    phone : {
        type : Number
    },
    mobile : {
        type :  Number
    },
    email  : {
        type : String
    },
    language  : {
        type : Number , //  1-  English, 2- Hindi  3- Others
    },
    metadata :[{
        info : {type: Object}
    }],
    address  : [{
        addresstype  : {
            type : Number , //  1- Contact, 2- Invoice , 3  - Shipping  , 4  - others 
        },
        line1 : {
            type : String
        },
        line2 : {
            type:  String
        },
        city : {
            type: String,
        },
        state : {
            typ: string
        },
        zipcode  : {
            type: Number
        },
        phone : {
            type : Number
        },
        mobile : {
            type :  Number
        },
        email  : {
            type : String
        },
        note : {
            type:  String
        },
        contactname  : {
            type : String
        }

    }]
});

var  Contact  =  mongoose.model('Contact', contactSchema);

module.exports = {Contact}