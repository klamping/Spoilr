YUI.add('spoilr-tests', function(Y) {

    var testBasic = new Y.Test.Case({
        name: "Spoilr Tests",

        setUp: function () {
            this.button = Y.one("#show-spoiler");
            this.spoilr = Y.one("#spoiler");
        },

        'Spoilr should toggle a class of "warning" on the button when hovered': function() {
            Y.Assert.isFalse(this.button.hasClass("warning"), "Button should not have a class of warning before hover");

            // Simulate a hover event
            this.button.simulate("mouseover");

            Y.Assert.isTrue(this.button.hasClass("warning"), "Button should have a class of warning after hover");

            // Simulate an "unhover" event
            this.button.simulate("blur");

            Y.Assert.isFalse(this.button.hasClass("warning"), "Button should not have a class of warning after hover is over");
        },

        'Spoilr should remove the "hidden" class on the spoiler when clicked': function() {
            Y.Assert.isTrue(this.spoilr.hasClass("hidden"), "Spoiler should have a class of warning before click");

            // Simulate a click event
            this.button.simulate("click");

            Y.Assert.isFalse(this.spoilr.hasClass("hidden"), "Spoiler should have a class of warning after click");  
        },

        'Spoilr should add the "hidden" class back to the spoiler after 5 seconds': function() {
            // Simulate a click event
            this.button.simulate("click");

            this.wait(function (){
                // Assert 
                Y.Assert.isTrue(this.spoilr.hasClass("hidden"), "Spoiler should have class of 'hidden'");
            }, 5500); // wait 5.5 seconds
        }
    });

    var suite = new Y.Test.Suite();
    suite.add(testBasic);

    Y.Test.Runner.add(suite);
});