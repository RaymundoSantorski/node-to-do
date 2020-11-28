const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch(comando){

    case 'crear': 
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getList(argv.completado);
        for(let tarea of listado){
            if(tarea!=null){
                console.log('====Por hacer===='.green);
                console.log('Tarea: ', tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('================='.green);
            }
            
        }
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        if(actualizado){
            console.log('Tarea actualizada con exito');
        }else{
            console.log('No se encontró la tarea o no se pudo actualizar');
        }
        break;
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        if(borrado){
            console.log('Tarea borrada con exito');
        }else{
            console.log('No se encontró la tarea o no se pudo borrar');
        }
        break;
    default: 
        console.log('Comando no reconocido');
}