'use strict';

const  assert  =  require('assert');
const  config = require('../config/config').config();

describe('Configuration',()=>{


    it('Testing Reading Configuration for Developement  Enviroment',()=>{
            assert(config.Version === '1.0.0');
    });

});
