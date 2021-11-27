const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllPosts = async (client) => {
  const { rows } = await client.query(
    `
    SELECT *, u.user_name, p.collected_money/p.target_money*100 AS achieved_percentage, ttl FROM "post" p
    LEFT JOIN "user" u on u.user_id = p.user_id
    ORDER BY p.post_id
    `,
  );

  return convertSnakeToCamel.keysToCamel(rows);
};

const createPost = async (client, tag, description) => {
  const title = '유저의 프로젝트 Title';
  const thumbnail = 'https://firebasestorage.googleapis.com/v0/b/tumblbug-sopt.appspot.com/o/post%2Fpost1.png?alt=media';
  const ttl = 19;
  const targetMoney = 3000000;
  const collectedMoney = 6000000;
  const userId = 1;

  const { rows } = await client.query(
    `
    INSERT INTO "post"
    (thumbnail, tag, title, description, ttl, target_money, collected_money, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `,
    [thumbnail, tag, title, description, ttl, targetMoney, collectedMoney, userId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllPosts, createPost };
