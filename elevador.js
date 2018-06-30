var piso_seleccionado ;
var piso_actual= 1;
const primer_piso= 2;
const ultimo_piso= 20;
piso_seleccionado = prompt ('a que piso vas?');

var direccion = prompt ('subes o bajas?');

if (direccion === "subes") {
	

for (piso_actual; piso_actual <= ultimo_piso ; piso_actual++){
	console.log ("estas en el piso" + piso_actual);
	if (piso_actual == piso_seleccionado){
		alert ("Llegaste");
	}
}

}
else if (direccion == "bajas") {

for (piso_actual= 20;piso_actual >= primer_piso; piso_actual--){
	console.log ("estas en el piso" + piso_actual);
	if (piso_actual == piso_seleccionado){
		alert ("Legaste");
	}
}
}
