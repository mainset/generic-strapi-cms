// https://strapi.io/blog/how-to-deploy-strapi-docker-container-on-aws-elastic-beanstalk

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("RDS_HOSTNAME", process.env.RDS_HOSTNAME),
      port: env.int("RDS_PORT", process.env.RDS_PORT),
      database: env("RDS_DB_NAME", process.env.RDS_DB_NAME),
      user: env("RDS_USERNAME", process.env.RDS_USERNAME),
      password: env("RDS_PASSWORD", process.env.RDS_PASSWORD),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
