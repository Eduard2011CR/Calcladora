
function mostrar(value){
document.getElementById('popup').style.display = 'block';
var numerodelabutaca=value;
document.getElementById('Asiento').innerHTML= numerodelabutaca;
}

function cancelar() {
	document.getElementById('popup').style.display = 'none';
}