import { useContext, useState } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
import IExpense from "../../Types/IExpense";
import classes from "./Form.module.css";

interface IFormProps {
    expenses: IExpense[];
    addExpense: (name: string, amount: number) => void;
}

function Form({ expenses, addExpense }: IFormProps) {
    const [nameInput, setNameInput] = useState("");
    const [amountInput, setAmountInput] = useState(0);

    const onChangeIncome = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNameInput(e.target.value);
    };

    const onChangeOutcome = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAmountInput(e.target.valueAsNumber);
    };

    const onClick = () => addExpense(nameInput, amountInput);

    return (
        <div className={classes.container}>
            <div>
                <p className={classes.input_label}>Name</p>
                <input
                    className={classes.input}
                    value={nameInput}
                    onChange={onChangeIncome}
                ></input>
            </div>
            <div>
                <p className={classes.input_label}>Amount</p>
                <input
                    type="number"
                    className={classes.input}
                    value={amountInput}
                    onChange={onChangeOutcome}
                ></input>
            </div>
            <button className={classes.add_btn} onClick={onClick}>Add</button>
        </div>
    );
}

export default Form;
