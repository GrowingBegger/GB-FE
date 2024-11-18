import { instance } from "../axios";
import { getExpensesType, getMonthExpensesType } from "./type";

export const getExpenses = async () => {
    return await instance.get<getExpensesType>("/expenses/year");
};

export const getMonthExpenses = async () => {
    return await instance.get<getMonthExpensesType>("/expenses/month");
};
