var assert = require('chai').assert;
var main = require('../Day10');

describe('main', function(){
    
    var result = main(72);
    // console.log(result);
    it('should return a binary number', function(){
        // var result = add(5);  // moved into outer scope
        assert.equal(result, '1001000');
    });
    
    it('should return type string', function(){
        // var result = add(5);
        assert.typeOf(result, 'string');
    });
    
    it('should return an array', function(){
        // var result = add(5);
        var arr = result.toString(2).split('');
        assert.isArray(arr);
    });
});