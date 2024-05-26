const { Employee } = require('../models');
const { errorHandler } = require('../utils');

module.exports = {
  getEmployees: async (_, res) => {
    try {
      const employees = await Employee.findAll();
      if (employees) {
        res.status(200).json({
          status: 'success',
          message: 'Employees retrieved successfully',
          data: employees,
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'Employees not found',
        });
      }
    } catch (error) {
      errorHandler(error, res);
    }
  },
};
