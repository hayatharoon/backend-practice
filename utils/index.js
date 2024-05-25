const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
};

const filterObject = (object, keys) => {
  const filteredObject = {};
  Object.keys(object).forEach((key) => {
    if (!keys.includes(key)) {
      filteredObject[key] = object[key];
    }
  });
  return filteredObject;
};

module.exports = {
  encryptPassword,
  filterObject,
};
