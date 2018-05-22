const assert  = require('assert');
const user  = require('../login/models/user');

describe('UserSection',()=>{

    it('Create User',(done)=>{
           let _user =  new user();
           _user.email  = "himanshu.parkash@outlook.com";
           _user.name  =  "himanshu";
           _user.password = "Welcome1234"

           _user.save().then(()=>{
               console.log(_user.isNew);
                assert(!_user.isNew);
                done();
           });
    });

});