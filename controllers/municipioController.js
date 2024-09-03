/* municipiocontroller */

const municipioModel=require('../models/municipioModel');

async function obtenerMunicipios(req,res){
    try{
        const resultados = await municipioModel.getAllMunicipios();
        res.send("Este es obtener municipios");
    }
    catch(e){
        res.send("Hay un error");
    }
}


async function agregarMunicipios(req, res){
    try{
        const resultados = await municipioModel.postAddMunicipios();
        res.send("Este es agregar municipios");
    }
    catch(e){
        res.send("Hay un error");
    }
}



async function eliminarMunicipios(req, res){
    try{
        const resultados = await municipioModel.deleteMunicipios();
        res.send("Este es eliminar municipios");
    }
    catch(e){
        res.send("Hay un error");
    }
}


async function actualizarMunicipios(req, res){
    try{
        const resultados = await municipioModel.putUpdateMunicipios();
        res.send("Este es actualizar municipios");
    }
    catch(e){
        res.send("Hay un error");
    }
}

/* exportamos */
module.exports = {obtenerMunicipios, agregarMunicipios, eliminarMunicipios, actualizarMunicipios}

