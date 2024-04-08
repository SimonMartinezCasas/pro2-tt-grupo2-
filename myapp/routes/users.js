var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', /*aca va el controlador*/ ); //  se va a relacionar con login.ejs 
router.get('/profile', /*aca va el controlador*/ ); //  se va a relacionar con profile.ejs 
router.get('/profile/edit', /*aca va el controlador*/ ); //  se va a relacionar con profileEdit.ejs 
router.get('/register', /*aca va el controlador*/ ); //  se va a relacionar con register.ejs 


module.exports = router;
