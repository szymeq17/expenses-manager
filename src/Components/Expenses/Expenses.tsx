import { useContext } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
import IExpense from "../../Types/IExpense";
import Entry from "../Entry/Entry";
import Form from "../Form/Form";
import Summary from "../Summary/Summary";
import classes from "./Expenses.module.css";

interface IExpensesProps {}

function Expenses({}: IExpensesProps) {
    const expenses = useContext(ExpenseContext);

    return (
        <>
            <div className={classes.container}>
                <div className={classes.panel}>
                    <h2 className={classes.title}>Incomes</h2>
                    <Form
                        expenses={expenses.incomes}
                        addExpense={expenses.addIncome}
                    />
                    <div className={classes.placeholder}>
                        {expenses.incomes.map((income) => (
                            <Entry
                                expense={income}
                                removeExpense={expenses.removeIncome}
                            />
                        ))}
                    </div>
                </div>
                <div className={classes.panel}>
                    <h2 className={classes.title}>Outcomes</h2>
                    <Form
                        expenses={expenses.outcomes}
                        addExpense={expenses.addOutcome}
                    />
                    <div className={classes.placeholder}>
                        {expenses.outcomes.map((outcome) => (
                            <Entry
                                expense={outcome}
                                removeExpense={expenses.removeOutcome}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Summary
                incomesAmount={expenses.incomesAmount}
                outcomesAmount={expenses.outcomesAmount}
            />
        </>
    );
}

export default Expenses;
