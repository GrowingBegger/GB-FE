import { instance } from "../axios";
import { getExpensesType } from "./type";

export const getExpenses = async () => {
    return await instance.get<getExpensesType>("/expenses");
};
