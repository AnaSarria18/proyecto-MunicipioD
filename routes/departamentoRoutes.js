/* get post delete toda la parte de rutas*/
const express = require('express');
const router = express.Router();
const departamentoController= require('../controllers/departamentoController')

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/departamentos',departamentoController.obtenerDepartamentos)


router.post('/departamentos',departamentoController.agregarDepartamentos)


router.delete('/departamentos',departamentoController.eliminarDepartamentos)


router.put('/departamentos', departamentoController.actualizarDepartamentos)



/* exportamos las rutas */
module.exports = router;