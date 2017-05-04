var genero = document.getElementsByName('genero');
var regPublic = document.getElementsByName('reg-public');
var inputFile = document.getElementsByName('file');
var guardar = document.getElementById('submit');
var form = document.getElementById('form');
var ruc = document.getElementById('ruc');
/*
guardar.addEventListener('click',function(event) {
  event.preventDefault();
	validarGenero();
	validarRegPublic();
	validarFile();

});
*/

function validarGenero() {
	if(genero[0].checked || genero[1].checked) {
		submit.nextElementSibling.innerText= "";
		document.getElementById("formulario").reset();  // limpiar formulario
	} else {
		window.location = "finish.html";
	}
}

function validarRegPublic() {
	if(regPublic[0].checked || regPublic[1].checked) {
		if (regPublic[0].checked) {
			ruc.setAttribute("required", "true");
		}
		submit.nextElementSibling.innerText= "";
		document.getElementById("formulario").reset();  // limpiar formulario
	} else {
		submit.nextElementSibling.innerText= "Confirmar si está inscrito en registros públicos.";
	}
}

function validarFile() {
	if(inputFile[0].value = "" || inputFile[1].value == "" || inputFile[2].value == "") {
		submit.nextElementSibling.innerText= "Subir mínimo una imagen.";
	} else {
		submit.nextElementSibling.innerText= "";
		document.getElementById("formulario").reset();  // limpiar formulario
	}
}
