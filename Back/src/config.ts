import 'dotenv/config';

export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  jwt: {
    secret: process.env.JWT_SECRET || 'fallback_secret_for_dev_only',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  },
  publicRoutes: ['/', '/login']
};