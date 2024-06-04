const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const employeeRouter = require('./employee');
const expenseRouter = require('./expense');

router.use('/users', userRouter);
router.use('/employees', employeeRouter);
router.use('/expense', expenseRouter);

module.exports = router;
