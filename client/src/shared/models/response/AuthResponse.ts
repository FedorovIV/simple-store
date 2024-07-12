import { UserDTO } from "../UserDTO";

export interface AuthResponse {
    accessToken:string;
    user: UserDTO;

}
  