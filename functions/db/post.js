const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllPosts = async (client) => {
  const { rows } = await client.query(
    `
        SELECT * FROM "post"
    `,
  );

  return convertSnakeToCamel.keysToCamel(rows);
};

const createPost = async (client, tag, description) => {
  const title = description.substr(0, 10); // 임시 title: 요약의 1~10번째 글
  const ttl = Math.floor(Math.random() * 24) + 1; // 임시 ttl: 1~24 중 random number
  const { rows } = await client.query(
    `
    INSERT INTO "post"
    (tag, title, description, ttl)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
    `,
    [tag, title, description, ttl],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllPosts, createPost };
