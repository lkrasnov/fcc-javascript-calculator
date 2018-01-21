var result = 0;
var input = "";
$(document).ready(function() {
    updateDisplay("0");
});

$("#zero").click(function() {
    numInput("0");
    (this).blur();
});

$("#one").click(function() {
    numInput("1");
    (this).blur();
});

$("#two").click(function() {
    numInput("2");
    (this).blur();
});

$("#three").click(function() {
    numInput("3");
    (this).blur();
});

$("#four").click(function() {
    numInput("4");
    (this).blur();
});

$("#five").click(function() {
    numInput("5");
    (this).blur();
});

$("#six").click(function() {
    numInput("6");
    (this).blur();
});

$("#seven").click(function() {
    numInput("7");
    (this).blur();
});

$("#eight").click(function() {
    numInput("8");
    (this).blur();
});

$("#nine").click(function() {
    numInput("9");
    (this).blur();
});

$("#dec").click(function() {
    if (!input.includes(".") && input.length < 9) {
        if (input == "") {
            input = "0.";
        } else {
            input += ".";
        }

        updateDisplay(input);
    }
    (this).blur();
});

$("#eq").click(function() {
    (this).blur();
});

$("#plus").click(function() {
    (this).blur();
});

$("#minus").click(function() {
    (this).blur();
});

$("#mult").click(function() {
    (this).blur();
});

$("#div").click(function() {
    (this).blur();
});

$("#per").click(function() {
    (this).blur();
});

$("#ac").click(function() {
    (this).blur();
});

$("#ce").click(function() {
    input = "";
    updateDisplay("0");
    (this).blur();
});

function numInput(num) {
    var maxLength = input.includes(".") ? 11 : 10;
    if (input.length < maxLength) {
        if (!(num == "0" && input == "")) {
            input += num;
            updateDisplay(input);
        }
    }
}

function updateDisplay(val) {
    $("#disp").html(val);
}