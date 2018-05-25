const assert  = require('assert');
const user  = require('../login/models/user');

describe('UserSection',()=>{
   var _user = null;

   beforeEach((done)=>{
      _user =  new user();
    _user.email  = "himanshu.parkash2@outlook.com";
    _user.name  =  "himanshu";
    _user.password = "Welcome1234"

    _user.save().then(()=>{
        
         done();
    });

   })

    it('Create User',(done)=>{
          var  _user =  new user();
           _user.email  = "himanshu.parkash@outlook.com";
           _user.name  =  "himanshu";
           _user.password = "Welcome1234"

           _user.save().then(()=>{
                assert(!_user.isNew);
                done();
           }).catch((err)=> { 
                 assert(false)

           });
    });



    it('Generate Auth Token',(done)=>{
        user.findById(_user._id).then((fuser)=>{
            fuser.generateAuthToken().then((token)=>{
                done();
                assert(true);
              
            });
                
                
        });
    });

});