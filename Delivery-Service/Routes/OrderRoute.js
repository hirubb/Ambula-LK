// routes/order.routes.js
const express = require('express');
const orderController = require('../Controllers/OrderController');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/DriverAssign', orderController.DriverAssign);



module.exports = router;
