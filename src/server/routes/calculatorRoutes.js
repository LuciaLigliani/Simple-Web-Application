const express = require('express');
const router = express.Router();

router.route('/calculate').get((req, res) => {
  res.send('Hello World!');
})

module.exports = router;