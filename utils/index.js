const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
};

const errorHandler = (error, res) => {
  console.error('Error:', error);

  const statusCode = error.status || 500;
  const message = error.message || 'Something went wrong';
  const status = String(statusCode).startsWith(4) ? 'fail' : 'error';

  res.status(statusCode).json({
    status,
    message,
  });
};

module.exports = {
  encryptPassword,
  errorHandler,
};
