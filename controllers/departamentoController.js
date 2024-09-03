/* departamentoscontroller */
const departamentoModel=require('../models/departamentoModel');

async function obtenerDepartamentos(req,res){
    try{
        const resultado = await departamentoModel.getAllDepartamentos();
        res.json(resultado)
    }
    catch(e){
        res.send("Hay un error");
    }
}


async function agregarDepartamentos(req, res){
    try{
        const resultado = await departamentoModel.postAddDepartamentos();
        res.send("Este es agregar departamentos");
    }
    catch(e){
        res.send("Hay un error");
    }
}



async function eliminarDepartamentos(req, res){
    try{
        const resultado = await departamentoModel.deleteDepartamentos();
        res.send("Este es eliminar departamentos");
    }
    catch(e){
        res.send("Hay un error");
    }
}


async function actualizarDepartamentos(req, res){
    try{
        const resultado = await departamentoModel.putUpdateDepartamentos();
        res.send("Este es actualizar departamentos");
    }
    catch(e){
        res.send("Hay un error");
    }
}

/* exportamos */
module.exports = {obtenerDepartamentos, agregarDepartamentos, eliminarDepartamentos, actualizarDepartamentos}

