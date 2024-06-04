const { Expense } = require('../models');
const { errorHandler } = require('../utils');

module.exports = {
  getExpense: async (_, res) => {
    try {
      const expenses = await Expense.findAll();
      if (!expenses) {
        return res.status(404).send({
          status: 'fail',
          message: 'Expenses not found',
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Expense retrieved successfully',
        data: expenses,
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
  createExpense: async (req, res) => {
    try {
      const { name, amount, paid, payType, receiptNo } = req.body;
      const expense = await Expense.create({
        name,
        amount,
        paid,
        payType,
        receiptNo,
      });

      res.status(201).json({
        status: 'success',
        message: 'Expense created successfully',
        data: expense,
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
  getExpenseById: async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await Expense.findByPk(id);
      if (!expense) {
        return res.status(404).json({
          status: 'fail',
          message: 'Expense not found',
        });
      }
      res.status(200).json({
        status: 'success',
        message: 'Expense retrieved successfully',
        data: expense,
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
  updateExpense: async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await Expense.findByPk(id);
      if (!expense) {
        return res.status(404).json({
          status: 'fail',
          message: 'Expense not found',
        });
      }
      await expense.update(req.body, {
        silent: true,
      });
      res.status(200).json({
        status: 'success',
        message: 'Expense updated successfully',
        data: expense,
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
  deleteExpense: async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await Expense.findByPk(id);
      if (!expense) {
        return res.status(404).json({
          status: 'fail',
          message: 'Expense not found',
        });
      }
      await expense.destroy();
      res.status(200).send({
        status: 'success',
        message: 'Expense deleted successfully',
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
};
