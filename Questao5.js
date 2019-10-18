function ValidarTudo() {
	if (ValidarNome() == true && ValidarLatitude() == true && ValidarLongitude() == true && ValidarDescricao() == true) {
		document.getElementById("mensagem").innerHTML = "SALVO COM SUCESSO!";

		document.getElementById("nome").value = "";
		document.getElementById("lati").value = "";
		document.getElementById("longi").value = "";
		document.getElementById("desc").value = "";

		return true;
	}else{
		document.getElementById("mensagem").innerHTML = "";
		return false;
	}
}

function ValidarNome() {
    if (document.getElementById("nome").value.length <= 255 && document.getElementById("nome").value.length > 0 && 
    document.getElementById("nome").value.indexOf("carro") == -1 && document.getElementById("nome").value.indexOf("macarrão") == -1) {
        document.getElementById("errorNome").innerHTML = "";
		return true;
	} else {
		document.getElementById("mensagem").innerHTML = "";
		document.getElementById("errorNome").innerHTML = "NOME INCOMPATIVEL!";
		return false;
	}
}

function ValidarLatitude() {
	if (parseFloat(document.getElementById("lati").value) >= -90 && parseFloat(document.getElementById("lati").value) <= 90) {
		document.getElementById("errorLati").innerHTML = "";
		return true;
	} else {
		document.getElementById("mensagem").innerHTML = "";
		document.getElementById("errorLati").innerHTML = "LATITUDE INCOMPATIVEL!";
		return false;
	}
}

function ValidarLongitude() {
	if (parseFloat(document.getElementById("longi").value) >= -180 && parseFloat(document.getElementById("longi").value) <= 180) {
		document.getElementById("errorLongi").innerHTML = "";
		return true;
	} else {
		document.getElementById("mensagem").innerHTML = "";
		document.getElementById("errorLongi").innerHTML = "LONGITUDE INCOMPATIVEL!";
		return false;
	}
}

function ValidarDescricao() {
	if (document.getElementById("desc").value.length <= 2000 && document.getElementById("desc").value.length > 0) {
		document.getElementById("errorDesc").innerHTML = "";
		return true;
	} else {
		document.getElementById("mensagem").innerHTML = "";
		document.getElementById("errorDesc").innerHTML = "DESCRICAO INCOMPATIVEL!";
		return false;
	}
}