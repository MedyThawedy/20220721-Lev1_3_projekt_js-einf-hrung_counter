
let zahl = parseInt(document.getElementById("pResult").innerHTML)
console.log(zahl);

function fn_add1() {
    zahl = zahl + 1;
    console.log(zahl)
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_substract1() {
    zahl = zahl - 1;
    console.log(zahl)
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_add10() {
    zahl = zahl + 10;
    console.log(zahl)
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_substract10() {
    zahl = zahl - 10;
    console.log(zahl)
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_add100() {
    zahl = zahl + 100;
    console.log(zahl)
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_substract100() {
    zahl = zahl - 100;
    console.log(zahl)
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}


function fn_reset() {
    zahl = 0;
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_d() {
    zahl = zahl * 2;
    console.log(zahl)
    document.getElementById("pResult").innerHTML = zahl;
    console.log(document.getElementById("pResult").innerHTML)
}


