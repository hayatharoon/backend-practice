const express = require('express');
const router = express.Router();

const controller = require('../controllers/employeeController');

router.get('/', controller.getEmployees);
router.get('/:id', controller.getEmployeeById);

module.exports = router;
