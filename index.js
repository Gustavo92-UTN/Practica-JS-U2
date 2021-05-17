var nombreAlumno, nota1, nota2, nota3, promedio;
nombreAlumno = prompt("Ingrese el nombre del alumno:");
nota1 = parseFloat(prompt("Ingrese la primer nota del alumno: \n(Para notas con decimales use el punto (.))"));
nota2 = parseFloat(prompt("Ingrese la segunda nota del alumno: \n(Para notas con decimales use el punto (.)"));
nota3 = parseFloat(prompt("Ingrese la tercera nota del alumno: \n(Para notas con decimales use el punto (.)"));
promedio = (nota1 + nota2 + nota3)/3;

alert("El promedio de " + nombreAlumno + " es: " + promedio.toFixed(2));

/* notaFinal = promedio.toFixed(2); */

if(promedio.toFixed(2) >= 6){
    document.getElementById("mensaje").innerHTML = "APROBADO/A";
}
else{
    document.getElementById("mensaje").innerHTML = "DESAPROBADO/A";
}