const fs = require('fs');

let listadoToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listadoToDo);
    fs.writeFile('./db/data.json', data, (err) => {
        if(err){
            throw new Error('No se pudo crear la tarea');
        }
    });
}

const chargeDB = () => {
    try{
        listadoToDo = require('../db/data.json');
    }catch(err){
        listadoToDo = [];
    }
}

const actualizar = (descripcion, completado = true) => {
    chargeDB();
    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);
    if(index>=0){
        listadoToDo[index].completado = completado;
        saveDB();
        return true;
    }else{
        return false;
    }
}

const crear = (descripcion) => {
    chargeDB();
    let toDo = {
        descripcion,
        completado: false
    }

    listadoToDo.push(toDo);
    saveDB();

    return toDo;
}

const getList = () => {
    chargeDB();
    return listadoToDo;
}

const borrar = (descripcion) => {
    chargeDB();
    let list = listadoToDo.filter(tarea => tarea.descripcion !== descripcion);
    if(list.length === listadoToDo.length){
        return false;
    }else{
        listadoToDo = list;
        saveDB();
        return true;
    }
    
}

module.exports = {
    crear, 
    getList,
    actualizar,
    borrar
}