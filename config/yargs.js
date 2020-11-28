const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca la tarea como completada o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea',{
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas junto con su estado', {})
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}