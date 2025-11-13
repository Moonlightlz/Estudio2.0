
export enum GameState {
  Welcome,
  Quiz,
  Results,
}

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}
