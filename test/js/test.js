var assert=require('assert'),
file = require('./../../build/js/test2.js');

describe("Hello", function() {
	
	it("Output Hello world!", function() {
		assert.equal(file.Hello(5),'Hello world!');
	}),

	it("Output Hello world without !", function() {
		assert.equal(file.Hello(4),'Hello world');
	}),

	it("Output Privet", function() {
		assert.equal(file.Hello(3),'Privet!');
	}),

	it("Hello admin!", function() {
		assert.equal(file.Looking("Le0n1daS"),'Hello Le0n1daS');
	})

	it("Fuck admin!", function() {
		assert.equal(file.Looking("Le0n1das"),'Fuck Off!');
	})
})

describe("webdriverIO", function() {

	it("getUrl", function() {
		
		browser
    	.url('/')
    	.setValue('#lst-ib', 'LionaHero#')
    	.click('#sbds')
    var title = browser.getTitle();
    var url = browser.getUrl();
    console.log('Title is: ' + title);
    console.log('Url is: ' + url);
	})
})