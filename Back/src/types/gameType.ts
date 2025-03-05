import { Context } from 'koa';

export interface Player {
  id: string;
  name: string;
  password: string;
}

export interface JwtConfig {
  secret: string;
  expiresIn: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

export interface AppConfig {
  port: number;
  env: string;
  jwt: JwtConfig;
  publicRoutes: string[];
}

export interface CustomContext extends Context {
  state: {
    playerId: string;
  };
}

export interface Card {
  id: string;
  type: string;
  name: string;
  attack: number;
  defense: number;
  effectDescription: string;
  effect: Function;
}

export interface GameState {
  id: string;
  players: {
    player1: Player;
    player2?: Player;
  };
  currentPlayer: CurrentPlayer;
  notPickedAndBannedCards: Card[];
  turn: number;
  status: GameStatus;
}

enum CurrentPlayer {
  Player1,
  Player2
}

enum GameStatus {
  Waiting,
  Playing,
  Finished
}