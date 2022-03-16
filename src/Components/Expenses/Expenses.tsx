import Form from "../Form/Form"
import classes from "./Expenses.module.css"

function Expenses() {
  return (
    <div className={classes.container}>
        <div className={classes.panel}>
            <h2 className={classes.title}>Incomes</h2>
            <Form />
            <div className={classes.placeholder}></div>
        </div>
        <div className={classes.panel}>
            <h2 className={classes.title}>Outcomes</h2>
            <Form />
            <div className={classes.placeholder}></div>
        </div>
    </div>
  )
}

export default Expenses