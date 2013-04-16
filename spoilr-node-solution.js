var jsdom = require('jsdom');

jsdom.defaultDocumentFeatures = {
    FetchExternalResources   : true,
    ProcessExternalResources : true,
    MutationEvents           : false,
    QuerySelector            : false
};

var dom = jsdom.defaultLevel;

var dom = '<html><head><title>Spoilr Tests</title></head><body><h1>Spoilr Tests</h1><button id="show-spoiler">Show Spoiler</button><div class="hidden" id="spoiler">The Titanic Sinks in the end!</div></body></html>';

var document = jsdom.jsdom(dom);
var window = document.createWindow();

var YUI = require('yui').YUI;

YUI({
    win: window,
    doc: document,
    modules: {
        'spoilr': {
            fullpath: './spoilr.js',
            requires: ["node", "event"]
        },
        'spoilr-tests': {
            fullpath: './spoilr-tests.js',
            requires: ['test', "node", "event", "node-event-simulate", "spoilr"]
        }
    }
}).use("spoilr", "test", "spoilr-tests", function(Y) {
    Y.Test.Runner.run();
});
