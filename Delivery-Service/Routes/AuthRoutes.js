// routes/auth.routes.js
const express = require('express');
const auth = require('../middleware/auth');
const AuthController = require('../Controllers/Authcontroller');
const router = express.Router();



router.post('/DriverRegister', AuthController.RegisterDriver);



module.exports = router;
