export const getConfig = () => {
  return {
    // base config
    NEST_SERVER_PORT: 3000,
    API_PREFIX: 'api',
    API_VERSION: 1,

    // redis config
    REDIS_DB: 1,

    NODEMAILER_HOST: 'smtp.sina.com',
    NODEMAILER_PORT: 587,

    // jwt config
    JWT_ACCESS_TOKEN_EXPIRES_TIME: '30m',
    JWT_REFRESH_TOKEN_EXPRES_TIME: '7d',
  };
};
