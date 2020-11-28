const descripcion = {
    alias: 'd',
    demand: 'true',
    desc: 'Descripcion de la tarea'
}
const completado = {
    alias: 'c',
    default: 'true',
    desc: 'Estado de la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea',{
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas junto con su estado', {
        completado:{
            alias: 'c',
            default: 'all',
            desc: 'Estado de la tarea'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}