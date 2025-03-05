import { Context, Next } from 'koa';
import jwt from 'jsonwebtoken';
import config from '../config';
import { Player } from '../types/gameType';

interface AuthOptions {
  exclude?: string[];
}

export default function auth(options: AuthOptions = {}) {
  const { exclude = config.publicRoutes } = options;
  
  return async (ctx: Context, next: Next): Promise<void> => {
    // Vérifier si la route est exclue de l'authentification
    if (exclude.some(path => ctx.path.startsWith(path))) {
      return await next();
    }

    try {
      const authHeader = ctx.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        ctx.status = 401;
        ctx.body = { error: 'Authentication required' };
        return;
      }

      //Leave 'bearer'
      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, config.jwt.secret) as Player;
      ctx.state.playerId = decoded.id;

      await next();

    } catch (err) {
      if (
        err instanceof jwt.JsonWebTokenError || 
        err instanceof jwt.TokenExpiredError
      ) {
        ctx.status = 401;
        ctx.body = { error: 'expired or invalid token' };
      } else {
        ctx.status = 500;
        ctx.body = { error: 'server error' };
        console.error('Authentication error:', err);
      }
    }
  };
}