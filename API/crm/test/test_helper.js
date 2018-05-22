const mongoose =   require("mongoose");
const  config = require('../config/config').config();

mongoose.connect(config.Mongodb);
mongoose.connection
        .once('open',()=>{ console.log('Good to go !!!') })
       .on('error',(error)=>{ console.error(error); });

beforeEach((done)=>{

    const { users}   = mongoose.connection.collections;

      if(users){
          users.drop(()=>{
              done();
          })
      }
})