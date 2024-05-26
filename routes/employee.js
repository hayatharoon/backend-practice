const express = require('express');
const router = express.Router();

const controller = require('../controllers/employeeController');

router.get('/', controller.getEmployees);

module.exports = router;
