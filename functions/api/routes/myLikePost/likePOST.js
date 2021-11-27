const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { postDB, myLikePostDB } = require('../../../db');

module.exports = async (req, res) => {
  const { userId, postId } = req.body;

  if (!userId || !postId) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

  let client;

  try {
    client = await db.connect(req);

    const like = await myLikePostDB.updateMyLikePost(client, userId, postId);

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LIKE_POST_SUCCESS, like));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.LIKE_POST_FAIL));
  } finally {
    client.release();
  }
};
