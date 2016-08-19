var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
var client = webdriverio.remote(options)
console.log("Gu")
client
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log(options)
        console.log("Title was:  "+ title);
    })
    .end()
    console.log(options)