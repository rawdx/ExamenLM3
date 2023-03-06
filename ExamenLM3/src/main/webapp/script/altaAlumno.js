function altaAlumno() {
	let nombre = prompt("Introduce tu nombre:");
	let apellidos = prompt("Introduce tus apellidos:");
	//toString() no sería necesario ya que prompt ya devuelve un string
	
	let edad = Number(prompt("Introduce tu edad:"));

	//Si se introduce algo que no es number se le aplica un valor por defecto de 18 años para que no salga NaN. 
	if (isNaN(edad))
		edad = 18;

	document.getElementById('info').innerHTML = 'Nombre y apellidos: ' + apellidos + ', ' + nombre + '.<br>' +
		'Edad: ' + edad + " años.<br>" + 'Edad es un tipo: ' + typeof (edad) + '.';
}