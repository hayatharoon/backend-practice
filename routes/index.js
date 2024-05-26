const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const employeeController = require('./employee');

router.use('/users', userRouter);
router.use('/employees', employeeController);

module.exports = router;
