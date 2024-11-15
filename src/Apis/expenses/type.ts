export type getExpensesType = {
    expenseData: getExpensesArrayType[];
};

export type getExpensesArrayType = {
    month: string;
    expense: number;
};
