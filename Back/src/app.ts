import Koa from 'koa';
import websockify from 'koa-websocket';

export function createApp() {
  const app = websockify(new Koa());
  return app;
}