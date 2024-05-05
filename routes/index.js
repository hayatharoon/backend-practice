const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = router;
