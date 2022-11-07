const { Router } = require('express');
const Recipe = require('./RecipeRoute.js');
const Diet = require('./DietRoute.js');


const router = Router();

// Configurar los routers

router.use('/recipe', Recipe);
router.use('/diet', Diet);


module.exports = router;
