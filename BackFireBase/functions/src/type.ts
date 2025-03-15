//interface
export interface Player {
  id: string;
  password: string;
  status: PlayerStatus;
}

//enum
export enum PlayerStatus {
  Neutral,
  MatchMaking,
  Playing
}