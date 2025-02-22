export interface Card {
    id: number;
    name: string;
    attack: number;
    defense: number;
    effectDescription: string;
    effect: Function;
  }
  
  export interface Player {
    id: number;
    deckDrafted: Card[];
    hand: Card[];
    board: Card[];
  }
  
  export interface GameState {
    id: string;
    players: {
      player1: Player;
      player2?: Player;
    };
    currentPlayer: CurrentPlayer;
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
  
  export interface GameAction {
    type: string;
    playerId: string;
    payload: any;
  }