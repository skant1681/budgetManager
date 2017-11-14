// (function () {
    'use strict';
function printHello(id) {
        console.log("Hello shashi"+id);
    };
    var a = 5;
    printHello("234");


    // $("#input").html("counter: "+counter);
    var count = 0;
    var hhii
    $("#send").click(function () {
        $("#output1").html("Input Given: "+$("#input").val());
        hhii = $("#input").val();
       addconter();
    });

    var addconter = (function() {
        var counter = 0;
        return function () {
            counter++;
            $("#output").html("counter: "+counter+","+count);
        }
    })();

// })();