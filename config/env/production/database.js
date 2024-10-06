const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        // https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};
