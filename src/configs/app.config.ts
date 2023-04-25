export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
  },
  database: {
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017',
  },
  isDevEnvironment: process.env.NODE_ENV === 'development',
};
