import { instance } from "../axios";
import { LoginType } from "./type";

export const login = async (data: LoginType) => {
  return await instance.post("/user/login", data);
};
