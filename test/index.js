var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
  //debut
  //prof 
  describe('is.array', function(){
	it('should return true if passed argument type is array', function() {
		expect(is.array(['value1', 'value2'])).to.be.true;
	}); 
    it('should return false if passed argument type is not array', function(){
		expect(is.array('yassine')).to.be.false;
	});	
  });
  // vrai start
  describe('is.boolean', function(){
	it('should return true if passed argument type is boolean', function() {
		expect(is.boolean(true)).to.be.true;
		expect(is.boolean(false)).to.be.true;
	}); 
	it('should return true if passed argument type is not boolean', function() {
		expect(is.boolean('mahma ykoun')).to.be.false;
	}); 
  });
  
    describe('is.date', function(){
	var date = new Date();
	it('should return true if passed argument type is date', function() {
		expect(is.date(date)).to.be.true;
	}); 
    it('should return false if passed argument type is date', function(){
		expect(is.date('mahma ykoun')).to.be.false;
	});	
  });
  
  describe('is.error', function(){
	var error = new Error();
	it('should return true if passed argument type is error', function() {
		expect(is.error(error)).to.be.true;
	}); 
    it('should return false if passed argument type is error', function(){
		expect(is.date('mahma ykoun')).to.be.false;
	});	
  });
  
    describe('is.function', function(){
	function Afunction(){};
	it('should return true if passed argument type is function', function() {
		expect(is.function(Afunction)).to.be.true;
	}); 
    it('should return false if passed argument type is not a function', function(){
		expect(is.function('mahma ykoun')).to.be.false;
	});	
  });
  
    describe('is.nan', function(){
	it('should return true if passed argument type is NaN', function() {
		expect(is.nan(NaN)).to.be.true;
	}); 
    it('should return false if passed argument type is a number', function(){
		expect(is.nan(1)).to.be.false;
	});	
  });
  
      describe('is.null', function(){
	it('should return true if passed argument type is null', function() {
		expect(is.null(null)).to.be.true;
	}); 
    it('should return false if passed argument type is not null', function(){
		expect(is.null(1)).to.be.false;
	});	
  });
  
    describe('is.regexp', function(){
	var regexp = new RegExp('ab+c', 'i');
	it('should return true if passed argument type is a regexp', function() {
		expect(is.regexp(regexp)).to.be.true;
	}); 
    it('should return false if passed argument type is not a regexp', function(){
		expect(is.regexp('mahma ykoun')).to.be.false;
	});	
  });
  
    describe('is.string', function(){
	
	it('should return true if passed argument type is a string', function() {
		expect(is.string("string")).to.be.true;
	}); 
    it('should return false if passed argument type is not a string', function(){
		expect(is.string('chaine')).to.be.false;
		expect(is.string(1)).to.be.false;
		expect(is.string(null)).to.be.false;
		
	});	
  });
      describe('is.char', function(){
	
	it('should return true if passed argument type is a char', function() {
		expect(is.char('char')).to.be.true;
	}); 
    it('should return false if passed argument type is not a char', function(){
		expect(is.char("string")).to.be.false;
		expect(is.char(1)).to.be.false;
		expect(is.char(null)).to.be.false;
		
	});	
  });
 
  
  
  describe('is.object', function(){
	    it('should return true if argument type is object', function() {
          var objet = {};
          function mafonction(){};
		  expect(is.object(objet)).to.be.true;
		  expect(is.object(mafonction)).to.be.true;
	   }); 
	    it('should return true if argument type is not object', function() {
		  expect(is.object('what')).to.be.false;
	}); 
  });
    
    
          describe('is.json', function(){
	    it('should return true if argument type is json', function() {
          var myJSONObject = {"bindings": [
        {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"},
        {"ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*"},
        {"ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*"}
    ]
};
		  expect(is.json(myJSONObject)).to.be.true;
	   }); 
	    it('should return true if argument type is not json', function() {
		  expect(is.json('what')).to.be.false;
	}); 
  });
  
  describe('is.sameType',function(){
	  it('should return true if passed parameter type is sameType',function(){
		  var argumdents =1; var argumdents2 =2; expect(is.sameType(argumdents,argumdents2)).to.be.true; 
		  });
		  it("should return false if passed parameter type is not sameType", function () { 
		  var notArguments = 'test'; var argumdents =1; expect(is.sameType(notArguments, argumdents)).to.be.false; 
		  });
		  });
  
});
