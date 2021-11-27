const express = require('express');
const router = express.Router();

router.get('/:userId', require('./myLikePostGET'));
router.post('/like', require('./likePOST'));

module.exports = router;
