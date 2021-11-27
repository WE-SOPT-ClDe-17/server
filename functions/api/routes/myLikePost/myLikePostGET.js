const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { postDB, myLikePostDB, userDB } = require('../../../db');

module.exports = async (req, res) => {
  const { userId } = req.params;
  let client;

  try {
    client = await db.connect(req);
    const user = await userDB.getUserById(client, userId);

    if (!user) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NO_USER));

    const posts = await myLikePostDB.getmyLikePost(client, userId);

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_MYLIKEPOST_SUCCESS, posts));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
