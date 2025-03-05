import { Context } from 'koa';
import jwt from 'jsonwebtoken';
import { Player } from '../types/gameType';
import { LoginRequest } from '../types/gameType';
import { config } from '../config';

const players: Player[] = [
  { id: '001', name: 'Izae', password: 'password1' },
  { id: '002', name: 'Jager', password: 'password2' },
  { id: '003', name: 'Dryade', password: 'password3' },
];

export default {
  getOnline: async (ctx: Context): Promise<void> => {
    ctx.body = {
      message: 'service Online',
      timestamp: new Date()
    };
  },
  
  login: async (ctx: Context): Promise<void> => {
    const { username, password } = ctx.body as LoginRequest;
    
    players.map((player) => {
        if (player.name === username && player.password === password) {
            const token = jwt.sign(
                { id: player.id },
                config.jwt.secret,
                { expiresIn: config.jwt.expiresIn }
            );

            ctx.response.status = 200;
            ctx.response.body = {
                id: player.id,
                name: player.name,
                token: token
            };
            return;
        } else {
            ctx.status = 401;
            ctx.body = { error: 'Identifiants invalides' };
        }
    })
  }
};