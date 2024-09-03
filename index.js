const express = require('express');
const app= express();
const port=5000;
const departamentoRoutes = require('./routes/departamentoRoutes')
const municipioRoutes = require('./routes/municipioRoutes')
app.use(express.json());

//Rutas de API
app.use('/api', departamentoRoutes);
app.use('/api', municipioRoutes)


// Escuchando el puerto 5000
app.listen(port, () => {
    console.log("servidor corriendo en puerto 5000")
});





