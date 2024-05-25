const { User } = require('../models');
const { filterObject } = require('../utils');

module.exports = {
  getUsers: async (_, res) => {
    try {
      const users = await User.findAll({ attributes: { exclude: ['password'] } });
      res.status(200).json({
        status: 'success',
        message: 'Users retrieved successfully',
        data: users,
      });
    } catch (error) {
      console.log('🚀 ~ getUsers: ~ error:', error);
      const message = error.message || 'Something went wrong';
      const statusCode = error.status || 500;
      const status = String(statusCode).startsWith(4) ? 'fail' : 'error';
      res.status(statusCode).json({
        status,
        message,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
      });
      if (user) {
        res.status(200).json({
          status: 'success',
          message: 'User retrieved successfully',
          data: user,
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'User not found',
        });
      }
    } catch (error) {
      console.log('🚀 ~ getUsers: ~ error:', error);
      const message = error.message || 'Something went wrong';
      const statusCode = error.status || 500;
      const status = String(statusCode).startsWith(4) ? 'fail' : 'error';
      res.status(statusCode).json({
        status,
        message,
      });
    }
  },
  createUser: async (req, res) => {
    console.log(req.body);
    try {
      const { email, password, role } = req.body;
      const user = await User.create({
        role,
        email,
        password,
      });
      res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: {
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.log('🚀 ~ createUser: ~ error:', error);
      const message = error.message || 'Something went wrong';
      const statusCode = error.status || 500;
      const status = String(statusCode).startsWith(4) ? 'fail' : 'error';
      res.status(statusCode).json({
        status,
        message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          status: 'fail',
          message: 'User not found',
        });
      }
      await user.update(req.body);
      res.status(200).json({
        status: 'success',
        message: 'User updated successfully',
        data: user,
      });
    } catch (error) {
      console.log('🚀 ~ updateUser: ~ error:', error);
      const message = error.message || 'Something went wrong';
      const statusCode = error.status || 500;
      const status = String(statusCode).startsWith(4) ? 'fail' : 'error';
      res.status(statusCode).json({
        status,
        message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
      });
      if (!user) {
        return res.status(404).json({
          status: 'fail',
          message: 'User not found',
        });
      }
      await user.destroy();
      res.status(200).send({
        status: 'success',
        message: 'User deleted successfully',
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    } catch (error) {
      console.log('🚀 ~ deleteUser: ~ error:', error);
      const message = error.message || 'Something went wrong';
      const statusCode = error.status || 500;
      const status = String(statusCode).startsWith(4) ? 'fail' : 'error';
      res.status(statusCode).json({
        status,
        message,
      });
    }
  },
};
