export interface User {
  email: string;
  password?: string;
  nickname?: string;
  profile?: string;
}
  
export interface UserState {
  user: User;
  isLoggedIn: boolean;
}

export interface UserInputData {
  nickname: string;
  email: string;
  password: string;
  comfirmPassword: string;
  profile?: string;
}