browser
    .init()
    .url('/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);

        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .getUrl().then( function(url) {
        console.log("Url is: "+ url);
    })
    .end();