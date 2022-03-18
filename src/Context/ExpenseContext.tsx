import React, { useState } from "react";
import { v4 } from "uuid";
import IExpense from "../Types/IExpense";

interface IExpenseContext {
    incomes: IExpense[];
    addIncome: (name: string, amount: number) => void;
    removeIncome: (id: string, amount: number) => void;
    incomesAmount: number;
    outcomes: IExpense[];
    addOutcome: (name: string, amount: number) => void;
    removeOutcome: (id: string, amount: number) => void;
    outcomesAmount: number;
}

export const ExpenseContext = React.createContext<IExpenseContext>(
    {} as IExpenseContext
);

interface IExpenseContextProps {
    children: React.ReactNode;
}

export const ExpenseContextProvider = ({ children }: IExpenseContextProps) => {
    const [outcomes, setOutcomes] = useState<IExpense[]>([]);

    const [outcomesAmount, setOutcomesAmount] = useState<number>(0);

    const addOutcome = (name: string, amount: number) => {
        setOutcomes((prevOutcomes) => {
            const newOutcomes = [...prevOutcomes];
            newOutcomes.push({ id: v4(), name: name, amount: amount });
            return newOutcomes;
        });
        setOutcomesAmount((prevAmount) => prevAmount + amount);
    };

    const removeOutcome = (id: string, amount: number) => {
        setOutcomes((prevOutcomes) =>
            prevOutcomes.filter((outcome) => outcome.id !== id)
        );
        setOutcomesAmount((prevAmount) => prevAmount - amount);
    };

    const [incomes, setIncomes] = useState<IExpense[]>([]);

    const [incomesAmount, setIncomesAmount] = useState<number>(0);

    const addIncome = (name: string, amount: number) => {
        setIncomes((prevIncomes) => {
            const newIncomes = [...prevIncomes];
            newIncomes.push({ id: v4(), name: name, amount: amount });
            return newIncomes;
        });
        setIncomesAmount((prevAmount) => prevAmount + amount);
    };

    const removeIncome = (id: string, amount: number) => {
        setIncomes((prevIncomes) =>
            prevIncomes.filter((income) => income.id !== id)
        );
        setIncomesAmount((prevAmount) => prevAmount - amount);
    };

    return (
        <ExpenseContext.Provider
            value={{
                incomes,
                addIncome,
                removeIncome,
                incomesAmount,
                outcomes,
                addOutcome,
                removeOutcome,
                outcomesAmount
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};
