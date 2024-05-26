const { User } = require('../models');
const { errorHandler } = require('../utils');

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
      errorHandler(error, res);
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
      errorHandler(error, res);
    }
  },
  createUser: async (req, res) => {
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
      errorHandler(error, res);
    }
  },
  updateUser: async (req, res) => {
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
      await user.update(req.body, {
        silent: true,
      });
      res.status(200).json({
        status: 'success',
        message: 'User updated successfully',
        data: user,
      });
    } catch (error) {
      errorHandler(error, res);
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
        user,
      });
    } catch (error) {
      errorHandler(error, res);
    }
  },
};
