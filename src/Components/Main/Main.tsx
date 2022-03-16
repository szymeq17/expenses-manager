import { useState } from "react"
import IExpense from "../../Types/IExpense"
import Expenses from "../Expenses/Expenses"
import classes from "./Main.module.css"
import { v4 } from "uuid"

function Main() {
    const ExpensesList = () => {
        const [expenses, setExpenses] = useState<IExpense[]>([
            { id: v4(), name: "Ser", amount: -3.40 },
            { id: v4(), name: "Szynka", amount: -5.40 },
            { id: v4(), name: "Wyplata", amount: 10000 },
            { id: v4(), name: "Chleb", amount: -4.50 },
            { id: v4(), name: "Mleko", amount: -2.40 },
        ]);
    }

  return (
    <>
        <h1 className={classes.title}>Expenses Manager</h1>
        <hr></hr>
        <Expenses />
    </>
  )
}

export default Main