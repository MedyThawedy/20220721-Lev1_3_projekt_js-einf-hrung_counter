
let v = parseInt(document.getElementById("pResult").innerHTML)
console.log(zahl);

function fn_add1(zahl) {
    v = v + zahl;
    console.log(v)
    document.getElementById("pResult").innerHTML = v;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_substract1(zahl) {
    v = v - zahl;
    console.log(v)
    document.getElementById("pResult").innerHTML = v;
    console.log(document.getElementById("pResult").innerHTML)
}


function fn_reset() {
    v = 0;
    document.getElementById("pResult").innerHTML = v;
    console.log(document.getElementById("pResult").innerHTML)
}

function fn_d() {
    v = v * 2;
    console.log(v)
    document.getElementById("pResult").innerHTML = v;
    console.log(document.getElementById("pResult").innerHTML)
}


