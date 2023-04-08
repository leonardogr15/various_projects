function appendToResult(value) {
    document.getElementById("result").innerHTML += value;
}

function calculate() {
    var result = eval(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = result;
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}

function clearAll() {
    clearResult();
}