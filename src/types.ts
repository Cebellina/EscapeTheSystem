export type Item = {
  id: number;
  item: string;
  description: string;
  image: string;
};

export type Room = {
  id: number;
  roomName: string;
  roomPath: string;
  unsolvedInstruction: string;
  solvedInstruction: string;
  hint: string;

  unsolvedImage: string;
  solvedImage: string;
  
  itemToSolve: number;
  itemToAdd: number | null;
};