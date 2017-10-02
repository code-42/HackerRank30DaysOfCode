var assert = require('chai').assert;
var maine = require('../Day10');

describe('maine', function(){
    
    var result = maine('ED');
    // console.log(result);
    it('should print to console', function(){
        // var result = add(5);  // moved into outer scope
        assert.equal(result, 'ED');
    });
    
    it('should return type string', function(){
        // var result = add(5);
        assert.typeOf(result, 'string');
    });
});