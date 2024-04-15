const express = require('express');
const Joi = require('joi');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let user = await findUsername(req.body.username);
  if (!user) {
    return res.status(400).send('1. Invalid username or password');
  }
});

const validate = (req) => {
  const schema = {
    username: Joi.string().min(2).max(255).required(),
    password: Joi.string().min(2).max(1024).required(),
  };
  return Joi.validate(req, schema);
};

module.exports = router;
