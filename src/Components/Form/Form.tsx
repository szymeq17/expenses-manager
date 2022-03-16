import classes from "./Form.module.css"

function Form() {
  return (
    <div className={classes.container}>
        <div>
            <p className={classes.input_label}>Name</p>
            <input className={classes.input}></input>
        </div>
        <div>
            <p className={classes.input_label}>Amount</p>
            <input className={classes.input}></input>
        </div>
        <button className={classes.add_btn}>Add</button>
    </div>  )
}

export default Form