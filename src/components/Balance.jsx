import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map( transaction => transaction.amount )
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const incomeValues = amounts.filter( amount => amount > 0 )
    const income = incomeValues.reduce( (acc, item) =>  (acc += item), 0).toFixed(2)

    const expenseValues = amounts.filter( amount => amount < 0 )
    const expense = expenseValues.reduce( (acc, item) =>  (acc += item), 0).toFixed(2)

  return (
    <div>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>

      <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${expense}</p>
            </div>
        </div>
    </div>
  )
}

export default Balance