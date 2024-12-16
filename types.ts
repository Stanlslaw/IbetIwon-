export interface User {
  id: number;
  firstName: string;
  lastname?: string;
  isPremium?: boolean;
  languageCode?: string;
  photoUrl?: string;
  username?: string;
  coinBalance: number;
}

export interface UserInventory {
  userId: number;
  itemId: number;
}

export interface GameSkin {
  itemId: number;
  coinPrice: number;
  itemName: string;
}

export interface Statistic {
  userid: number;
  numberOfGames: number;
  wonGames: number;
  receivedCoins: number;
  lostCoins: number;
  flowedCoins: number;
  earnedCoins: number;
}

export interface UserGameHistory {
  userId: number;
  gameId: number;
  gameTypeId: number;
  betValue: number;
  isWon: boolean;
}

export interface GeneralGameInfo {
  gameId: string;
  gameTypeId: number;
  userIds: number[];
  winnerId: number;
  totalCoinBet: number;
}

export interface GameLobby {
  id: number;
  userIds: number[];
  creatorId: number;
  gameTypeId: number;
  bet: number;
  isOpen: boolean;
}
