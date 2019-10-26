(function(window){
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;


function FormHandler(selector){
    if(!selector) {
        throw new Error('No selector provided');
       }

       this.$formElement = window.jQuery(selector);
       if (this.$formElement.length === 0) {
           throw new Error('Could not find element with selelctor: ' + selector);
       }
}

FormHandler.prototype.addSubmitHandler = function(fn) {

    var $ = window.jQuery;

    console.log('Setting submiy handler for form');
    //more code
    this.$formElement.on('submit', function(event) {
        event.preventDefault();
        var data = {};

        var data = $(this).serializeArray();
        console.log(data);

        window.jQuery(this).serializeArray().forEach(function(item) {
            data[item.name] = item.value;
            console.log(item.name + ' is ' + item.value);
        })

        fn(data);


    })
}

App.FormHandler = FormHandler;
window.App = App;

})(window);