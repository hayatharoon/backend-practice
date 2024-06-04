const express = require('express');
const router = express.Router();

const controller = require('../controllers/expenseController');

router.get('/', controller.getExpense);
router.post('/', controller.createExpense);
router.get('/:id', controller.getExpenseById);

module.exports = router;
