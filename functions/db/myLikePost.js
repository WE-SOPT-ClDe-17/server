const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getmyLikePost = async (client, userId) => {
  const { rows } = await client.query(
    `
    SELECT id, m.post_id, thumbnail, title, tag, user_name, description, collected_money, collected_money/target_money*100 AS achieved_percentage, ttl FROM "myLikePost" m
    LEFT JOIN post p on p.post_id = m.post_id
    LEFT JOIN "user" u  on u.user_id = p.user_id
    WHERE m.state = true and m.user_id = $1
    ORDER BY m.post_id
    `,
    [userId],
  );

  return convertSnakeToCamel.keysToCamel(rows);
};

const updateMyLikePost = async (client, userId, postId) => {
  const { rows } = await client.query(
    `
    UPDATE "myLikePost" SET state = CASE
    WHEN state = true THEN false
    WHEN state = false THEN true END
    WHERE user_id = $1 AND post_id = $2
    RETURNING user_id, post_id, state
    `,
    [userId, postId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const createMyLikePost = async (client, postId) => {
  const userId = 1;
  const state = false;

  const { rows } = await client.query(
    `
    insert into "myLikePost" (user_id, post_id, state) values ($1, $2, $3)
    RETURNING *
    `,
    [userId, postId, state],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getmyLikePost, updateMyLikePost, createMyLikePost };
