import Expenses from "../Expenses/Expenses";
import classes from "./Main.module.css";
import { ExpenseContextProvider } from "../../Context/ExpenseContext";

function Main() {

    return (
        <ExpenseContextProvider>
            <h1 className={classes.title}>Expenses Manager</h1>
            <hr></hr>
            <Expenses />
        </ExpenseContextProvider>
    );
}

export default Main;
