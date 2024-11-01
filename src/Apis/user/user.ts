import { Cookie } from "../../Utils/cookie";
import { instance } from "../axios";
import { LoginType, getUserInfoType, SignupType } from "./type";

export const login = async (data: LoginType) => {
    return await instance.post("/user/login", data);
};

export const getUserInfo = async () => {
    return await instance.get<getUserInfoType>("/user/profile");
};

export const signup = async (data: SignupType) => {
  return await instance.post("/user/signup", data);
};
