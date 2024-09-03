const db = require('../config/db')
async function getAllDepartamentos(){
    try{
        const [results]=await db.query('select * from departamento');
        return results;
        console.log("Este es el metodo getAllDepartamentos"+results);
    }
    catch{
        console.log("Hay un error");
    }
}



function postAddDepartamentos(){
    try{
        console.log("Este es el metodo postAddDepartamentos");
    }
    catch{
        console.log("Hay un error");
    }
}



function deleteDepartamentos(){
    try{
        console.log("Este es el metodo deleteDepartamentos");
    }
    catch{
        console.log("Hay un error");
    }
}



function putUpdateDepartamentos(){
    try{
        console.log("Este es el metodo putUpdateDepartamentos");
    }
    catch{
        console.log("Hay un error");
    }
}



/* exportarla */
module.exports = {getAllDepartamentos, postAddDepartamentos, deleteDepartamentos, putUpdateDepartamentos}

