function sumar_horas()
{
  var fecha = document.getElementsByName("fecha")[0].value;
  alert(fecha+"fecha");
  var horas = document.getElementsByName("horas")[0].value;
  alert(horas+"horas");

	fecha = new Date(fecha);
  var d = new Date();
  d.setHours(0);
  alert(fecha+"nueva fecha");
		fecha.setHours(fecha.getHours());
    alert(fecha.getHours()+"function getHours");
		fecha =  fecha.toISOString();
    alert(fecha+"fecha de tipo ISOString");
	var fecha_date = fecha.split('T');
	var fecha_time = fecha_date[1].split('.');

	var fecha_time = fecha_date[1].split(':');
		fecha_date = fecha_date[0];

	fecha = fecha_date+' '+fecha_time[0]+':'+fecha_time[1];

  var i = 0
  for( i = 0; i < 24; i++){
   i = i+i;
    alert(i);
    alert(d+"fecha")
  }


	document.getElementsByName("log")[0].value = d;
}




function hola() {
alert("Hola");
}
