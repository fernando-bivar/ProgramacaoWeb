var cont = 0;

setTimeout('Contador()',500);

function Contador() {
    cont++;
    document.getElementById("label1").innerHTML = cont;
    setTimeout('Contador()',500);
}
