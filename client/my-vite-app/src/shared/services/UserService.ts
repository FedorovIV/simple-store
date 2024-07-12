import { AxiosResponse } from "axios";
import $api from "../http";
import { InfoResponse } from "../models/response/InfoResponse";
import { ProfileDTO } from "../models/ProfileDTO";

export default class UserService {
  static async getInfo(): Promise<AxiosResponse<InfoResponse>> {
    return $api.get("/user/getInfo");
  }

  static async createProfile(
    profile: ProfileDTO
  ): Promise<AxiosResponse<InfoResponse>> {
    return $api.post("/user/createProfile", profile);
  }
}
