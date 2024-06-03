const express = require('express');
const router = express.Router();

const controller = require('../controllers/employeeController');

router.get('/', controller.getEmployees);
router.get('/:id', controller.getEmployeeById);
router.post('/', controller.createEmployee);
router.put('/:id', controller.updateEmployee);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;
