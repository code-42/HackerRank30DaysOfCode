var assert = require('chai').assert;
var main = require('../Day10');

describe('main', function(){
    
    var result = main(42);
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