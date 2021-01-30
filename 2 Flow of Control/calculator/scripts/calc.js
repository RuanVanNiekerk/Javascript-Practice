// JavaScript source code
const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'plus', 'minus', 'divide', 'multiply', 'equals'];

/*function findClick() {
    for (i = 0; i <= 14; i++) {
        var curSelect = buttons[i];
        document.getElementById(buttons[i]).addEventListener("click", addNum(curSelect));
    }
}*/

function addNum(tempid) {
    console.log(tempid);

    switch (tempid) {
        case "plus":
            document.getElementById("display").innerHTML += "+";
            break;
        case "minus":
            document.getElementById("display").innerHTML += "-";
            break;
        case "divide":
            document.getElementById("display").innerHTML += "/";
            break;
        case "multiply":
            document.getElementById("display").innerHTML += "*";
            break;
        case "equals":
            document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
            break;
        default:
            document.getElementById("display").innerHTML += tempid;
    }
}