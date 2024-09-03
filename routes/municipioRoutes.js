/* get post delete toda la parte de rutas*/
const express = require('express');
const router = express.Router();
const municipioController= require('../controllers/municipioController')

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/municipios',municipioController.obtenerMunicipios)


router.post('/municipios',municipioController.agregarMunicipios)


router.delete('/municipios',municipioController.eliminarMunicipios)

router.put('/municipios',municipioController.actualizarMunicipios)



/* exportamos las rutas */
module.exports = router;