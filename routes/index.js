const express = require('express');
const router = express.Router();

const authRoute = require('../controllers/auth');

router.post('/test', (req, res) => {
  res.json({ message: 'Hello World' });
});
router.use('/api/auth', authRoute);

module.exports = router;
