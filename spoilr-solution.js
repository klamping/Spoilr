YUI.add('spoilr', function(Y) {
    // insert your JavaScript here
    var button = Y.one("#show-spoiler");
    var spoiler = Y.one("#spoiler");

    button.on("click", function () {
        spoiler.removeClass("hidden");
        setTimeout(function () {
            spoiler.addClass("hidden");
        }, 5000);
    });

    button.on("hover", function () {
        button.addClass('warning');
    });

    button.on(["blur", "mouseout"], function () {
        button.removeClass('warning');
    });
});