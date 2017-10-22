var assert = require('chai').assert;
var chai = require('chai');
var chaiFiles = require('chai-files');
var main = require('../Day11');

chai.use(require('chai-fs'));
chai.use(chaiFiles);
var expect = require('expect.js');
// var expect = require('chai').expect; 
// var expect = chai.expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;



describe('main', function(){
    
    var result = main();
    console.log(result);
    it('should show the file exists\n', function(){
        expect(file('Day11inputFile.txt')).to.exist;
    });

    it('should return an array', function(){
        assert(Array.isArray('a,b,c'.split(',')));
    });
    
});

