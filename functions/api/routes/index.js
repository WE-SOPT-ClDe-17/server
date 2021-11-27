const express = require('express');
const router = express.Router();

// '/user' 이하의 경로로 들어온 요청은 모두 user 폴더 안에서 처리
router.use('/post', require('./post'));
router.use('/my-like-post', require('./myLikePost'));

module.exports = router;
