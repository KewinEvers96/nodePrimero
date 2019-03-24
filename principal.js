// constantes necesarias
const {cursos, descCurso, infoCurso} = require('./cursos')
var express = require('express');
var app = express();
const opciones = {
    id_curso:{
        demand:true,
        alias:'id_cur'
    },
    nombre_estudiante:{
        demand:true,
        alias:'nom_est'
    },
    cedula_estudiante:{
        demand:true,
        alias:'ced_est'
    }
}

const argv = require('yargs')
            .command('inscribir','Inscribir curso', opciones)
            .argv;
const fs = require('fs');
// Funciones necesarias
let mostrarTodosCursos= cursos=>{
    for(i = 0; i < cursos.length; i++){
        descCurso(cursos[i], function(resultado){
            console.log(resultado);
        }, i);
    }
}

let idCurso = argv.id_curso;
let nombre_estudiante = argv.nombre_estudiante;
let cedula_estudiante = argv.cedula_estudiante;

if(typeof idCurso =='undefined'){
    console.log('Bienvenido\nLos cursos disponibles son:\n');
    mostrarTodosCursos(cursos);
}
else{
    let cursoL = cursos.find(function(curso){
        return curso.id == idCurso;
    });

    if(typeof cursoL == 'undefined'){
        console.log('No se encontró el curso con id:\t'+idCurso+'\nVerifique que exista un curso con el id. ingresado.' );
    }
    else{
        let info= infoCurso(cursoL);
        let texto = info + "Nombre estudiante:\t"+nombre_estudiante +
                    "<br>Cedula estudiante:\t" + cedula_estudiante;
        // fs.writeFile("Info de matricula.txt", texto, (err)=>{
        //     if(err) throw(err);
        //     console.log('Se ha creado el archivo de matricula');
        //     }
        // )
        app.get('/', function(req, res){
            res.send(texto);
        });

        app.listen(3000);
    }
}


