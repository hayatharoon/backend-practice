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
  getEmployeeById: async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findByPk(id);
      if (employee) {
        res.status(200).json({
          status: 'success',
          message: 'Employee retrieved successfully',
          data: employee,
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'Employee not found',
        });
      }
    } catch (error) {
      errorHandler(error, res);
    }
  },
  createEmployee: async (req, res) => {
    try {
      const { name, email, phoneNumber, address, DOB, gender, photo } = req.body;
      const employee = await Employee.create({
        name,
        email,
        phoneNumber,
        address,
        DOB,
        gender,
        photo,
      });
      res.status(201).json({
        status: 'success',
        message: 'Employee created successfully',
        data: employee,
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
  updateEmployee: async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findByPk(id);
      if (!employee) {
        return res.status(404).json({
          status: 'fail',
          message: 'Employee not found',
        });
      }
      await employee.update(req.body, {
        silent: true,
      });
      res.status(200).json({
        status: 'success',
        message: 'Employee updated successfully',
        data: employee,
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
  deleteEmployee: async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findByPk(id);
      if (!employee) {
        return res.status(404).json({
          status: 'fail',
          message: 'Employee not found',
        });
      }
      await employee.destroy();
      res.status(200).send({
        status: 'success',
        message: 'Employee deleted successfully',
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
};
