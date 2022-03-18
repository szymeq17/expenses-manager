import React from 'react'
import classes from "./Summary.module.css"

interface ISummaryProps {
    incomesAmount: number;
    outcomesAmount: number;
}

function Summary({incomesAmount, outcomesAmount}: ISummaryProps) {
  return (
    <div className={classes.container}>
        <div className={classes.results}>
            <div className={classes.incomes}>+{incomesAmount}PLN</div>
            <div className={classes.outcomes}>-{outcomesAmount}PLN</div>
        </div>
        <div className={classes.bilance}>{incomesAmount - outcomesAmount}PLN</div>
    </div>
  )
}

export default Summary