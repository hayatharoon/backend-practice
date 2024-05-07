const { User } = require('../models');

module.exports = {
  getUsers: async (_, res) => {
    try {
      const users = await User.findAll();
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
  async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
    } catch (error) {}
    res.json(user);
  },
  async createUser(req, res) {
    const user = await User.create(req.body);
    res.json(user);
  },
  async updateUser(req, res) {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.json(user);
  },
  async deleteUser(req, res) {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.json(user);
  },
};
