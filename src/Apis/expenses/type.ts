export type getExpensesType = {
    expenseData: getExpensesArrayType[];
};

export type getExpensesArrayType = {
    month: string;
    expense: number;
};

export type getMonthExpensesType = {
    dailyExpenseData: getMonthExpensesArrayType[];
};

export type getMonthExpensesArrayType = {
    date: number;
    expenses: expensesArrayType[];
};

export type expensesArrayType = {
    name: string;
    price: number;
};
