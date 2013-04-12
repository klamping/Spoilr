YUI.add('spoilr', function(Y) {

    // WAIT!!! Do you really want to spoil the spoilr code?
    // Scrolling down with reveal code that passes all the test
    // It's just one example of how to do it; There are many others














































    // insert your JavaScript here
    var button = Y.one("#show-spoiler");
    var spoiler = Y.one("#spoiler");

    button.on("click", function () {
        spoiler.removeClass("hidden");
        setTimeout(function () {
            spoiler.addClass("hidden");
        }, 5000);
    });

    button.on(["focus", "mouseover"], function () {
        button.addClass('warning');
    });

    button.on(["blur", "mouseout"], function () {
        button.removeClass('warning');
    });
});