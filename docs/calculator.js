var input = "0";
var x = null;
var y = null;
var ops = {
    ADDITION: "plus",
    SUBTRACTION: "sub",
    MULTIPLICATION: "mult",
    DIVISION: "div",
    PERCENTAGE: "per"
};
var currentOp = null;

$(document).ready(function() {
    updateDisplay(input);
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
    prepareY();
    switch(currentOp){
        case ops.ADDITION:
            x = x + y;
            break;
        case ops.SUBTRACTION:
            x = x - y;
            break;
        case ops.MULTIPLICATION:
            x = x * y;
            break;
        case ops.DIVISION:
            x = x / y;
            break;
        default:
    }
    clearInput();
    updateDisplay(x);
    (this).blur();
});

$("#plus").click(function() {
    setOperation(ops.ADDITION);
    prepareX();
    clearY();
    clearInput();
    (this).blur();
});

$("#minus").click(function() {
    setOperation(ops.SUBTRACTION);
    prepareX();
    clearY();
    clearInput();
    (this).blur();
});

$("#mult").click(function() {
    setOperation(ops.MULTIPLICATION);
    prepareX();
    clearY();
    clearInput();
    (this).blur();
});

$("#div").click(function() {
    setOperation(ops.DIVISION);
    prepareX();
    clearY();
    clearInput();
    (this).blur();
});

$("#per").click(function() {
    setOperation(ops.PERCENTAGE);
    (this).blur();
});

$("#ac").click(function() {
    clearInput();
    clearX();
    clearY();
    clearOperation();
    updateDisplay(input);
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
        if (!(num == "0" && input == "0")) {
            if (input == "0") {
                input = num;
            } else {
                input += num;
            }
            updateDisplay(input);
        }
    }
}

function updateDisplay(val) {
    $("#disp").html(val);
}

function prepareX() {
    if (x === null) {
        x = Number(input);
    }
}

function prepareY() {
    if (y === null) {
        y = Number(input);
    }
}

function clearY() {
    y = null;
}

function clearX() {
    x = null;
}

function clearInput() {
    input = "0";
}

function clearOperation() {
    currentOp = null;
}

function setOperation(operation) {
    currentOp = operation;
}