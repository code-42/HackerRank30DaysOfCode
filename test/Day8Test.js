var assert = require('chai').assert;
var processData = require('../Day8');

describe('processData', function(){
    
    var result = processData();
    console.log(result);
    it('should return a binary number', function(){
        assert.equal(result, '101010');
    });
    
    it('should return type string', function(){
        assert.typeOf(result, 'string');
    });
    
    it('should return an array', function(){
        var arr = result.toString(2).split('');
        assert.isArray(arr);
    });
});