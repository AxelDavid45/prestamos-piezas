export default () => ({
  port: process.env.APP_PORT,
  logLeve: process.env.LOG_LEVEL,
  database: {
    uri: process.env.DATABASE_URI,
    port: process.env.DATABASE_PORT,
    ssl: process.env.DATABASE_SSL,
  },
});
