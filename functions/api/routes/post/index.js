const express = require('express');
const router = express.Router();

router.get('/', require('./postGET'));
router.post('/', require('./postPOST'));

module.exports = router;
