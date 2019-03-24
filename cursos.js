let cursos=[ {
    id: 10001,
    nombre: 'Python basico',
    duracion: 36,
    valor: 250000
},
{
    id:10002,
    nombre:'Python Avanzado',
    duracion:40,
    valor:280000
},
{
    id:10003,
    nombre:'Excel Intermedio',
    duracion:32,
    valor:250000
}
,
{
    id:10004,
    nombre:'Fránces 1',
    duracion:40,
    valor:300000
}];

let descCurso= (curso, callback, timer) =>{
    setTimeout(function(){
        let desc = 'El curso ' + curso.nombre + 
            ' con id ' + curso.id + ' tiene una duración de ' + curso.duracion + 
            ' horas y un valor de ' + curso.valor + ' Pesos.\n';
        callback(desc);
    }, 2000*timer);
}
let infoCurso = curso => {
    let desc =  "<p>Id del curso:\t"+curso.id + 
        "<br>Nombre del curso:\t" + curso.nombre+
        "<br>Duración del curso:\t"+curso.duracion+" horas"+
        "<br>Valor del curso:\t"+curso.valor+ " COP</p>";
    return desc;
}
module.exports={cursos, descCurso, infoCurso};

