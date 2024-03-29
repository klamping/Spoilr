var YUI = YUI || undefined;

if (typeof require == "undefined" && typeof YUI == "undefined") {
    // we need to pull in YUI using NodeJS's require pattern if it's not already loaded
    YUI = require('yui').YUI;
}

YUI.add('spoilr', function(Y) {

    // WAIT!!! Do you really want to spoil the spoilr code?
    // Scrolling down with reveal code that passes all the test
    // It's just one example of how to do it; There are many others














































    // insert your JavaScript here
    var button = Y.one("#show-spoiler");
    var spoiler = Y.one("#spoiler");
    
    function warn () {
        button.addClass("warning");
    }
    
    function unwarn () {
        button.removeClass("warning");
    }

    button.on("click", function () {
        spoiler.removeClass("hidden");
        setTimeout(function () {
            spoiler.addClass("hidden");
        }, 5000);
    });

    button.on("hover", warn, unwarn);
    button.on("focus", warn);
    button.on("blur", unwarn);
});