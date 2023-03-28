const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./dogs.js");
const temperamentsRouter = require("./temperaments.js");

//creamos una instnacia del enrutador//
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//asociamos a los enrutadores//
router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentsRouter);


module.exports = router;
