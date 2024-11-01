import { instance } from "../axios";
import { LoginType, SignupType } from "./type";

export const login = async (data: LoginType) => {
  return await instance.post("/user/login", data);
};

export const signup = async (data: SignupType) => {
  return await instance.post("/user/signup", data);
};
