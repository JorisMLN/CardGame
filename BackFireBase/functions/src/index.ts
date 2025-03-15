//import { logger } from "firebase-functions";
import { onRequest, HttpsFunction } from "firebase-functions/v2/https";
//import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, DocumentReference } from "firebase-admin/firestore";
import { Player, PlayerStatus } from "./type";

initializeApp();

interface MessageRequest {
  query: {
    playername?: string;
    password?: string;
  };
}

interface MessageResponse {
  result: string;
}

interface Message {
  original: Player;
}

//endPoint
export const addPlayers = onRequest(async (req: MessageRequest, res: {json: (body: MessageResponse) => void}) => {
  const playerName = req.query.playername;
  const password = req.query.password;

  const newPlayer = {
    playerName: playerName,
    password: password,
    status: PlayerStatus.Neutral
  }
  
  // Push player into Firestore
  await getFirestore()
      .collection("players")
      .add({ original: newPlayer }) as DocumentReference<Message>;
  
  res.json({ result: `Player: ${newPlayer.playerName} added.` });
});
