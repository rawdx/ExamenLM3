function gestionFechas() {
	let ciudad = prompt("Introduce el nombre de una localización:\n- Madrid\n- París\n- Londres").toLowerCase();

	let local = new Date();

	//getTimezoneOffSet() devuelve en minutos la diferencia entre utc+0 y utc local.
	//(Este metodo asegura que funcione en cualquier lado del mundo)
	//Si se añade la diferencia de ms entre UTC+0 y ms de nuestra zona local salen los ms de UTC+0.
	let ms = local.getTime() + local.getTimezoneOffset() * 60 * 1000;

	let utc = new Date(ms);

	//Madrid y París se encuentran en la misma franja horaria UTC+1, Londres en UTC+0.
	switch (ciudad) {
		case 'madrid':
			//Se le añaden los ms entre UTC+0 y la franja que queremos (UTC+1) a los ms de UTC+0.
			let madrid = new Date(utc.getTime() + 1 * 3600 * 1000);

			document.write("Ciudad: Madrid");
			document.write("<br>Fecha: " + madrid.getDay() + "-" + madrid.getDate() + "-" + madrid.getFullYear());
			document.write("<br>Hora: " + madrid.getHours() + ":" + madrid.getMinutes() + ":" + madrid.getSeconds());
			break;
		case 'paris':
		case 'parís':
			//Si quisieramos otra franja cambiaríamos el valor 1 por el de la franja deseada.
			let paris = new Date(utc.getTime() + 1 * 3600 * 1000);

			document.write("Ciudad: París");
			document.write("<br>Fecha: " + paris.getDay() + "-" + paris.getDate() + "-" + paris.getFullYear());
			document.write("<br>Hora: " + paris.getHours() + ":" + paris.getMinutes() + ":" + paris.getSeconds());
			break;
		case "londres":
			document.write("Ciudad: Londres");
			document.write("<br>Fecha: " + utc.getDay() + "-" + utc.getDate() + "-" + utc.getFullYear());
			document.write("<br>Hora: " + utc.getHours() + ":" + utc.getMinutes() + ":" + utc.getSeconds());
			break;
		default:
			document.write("[Error] No has introducido un valor válido.");
			break;
	}
}