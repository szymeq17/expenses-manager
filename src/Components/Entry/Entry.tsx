import IExpense from "../../Types/IExpense";
import classes from "./Entry.module.css";

interface IExpenseProps {
    expense: IExpense;
    removeExpense: (id: string, amount: number) => void;
}

function Entry({ expense, removeExpense }: IExpenseProps) {
    const onClick = () => {
        removeExpense(expense.id, expense.amount);
    };
    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.pile}>{expense.name}</div>
                <div className={classes.pile}>{expense.amount}PLN</div>
            </div>
            <button className={classes.btn} onClick={onClick}>Remove</button>
        </div>
    );
}

export default Entry;
