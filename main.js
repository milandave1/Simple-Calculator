// this is a Javascript file for the online calculator project
function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add" && a == 6 && b == 9) {
        calculate = "69 tehe";
    } else if (op == "minus") {
        calculate = a - b;
    } else if (op == "divide") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    } else if (op == "add")  {
        calculate = a + b;
    }
    document.querySelector("#result").innerHTML = calculate;
}