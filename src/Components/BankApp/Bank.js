import React from "react";
import { store } from '../../store/bankStore'
import { bankAction } from '../../actions/bankAction'
import photographer from "../../images/girl.png";
import "./Bank.css";

const BankApp = () => {
  const account = store.getState();
  const { totalAmount, username } = account;
  function withdrawMoney(e) {
    e.preventDefault()
    const amount = e.target.dataset.amount;
    console.log(amount)
    let remainingAmount = totalAmount - amount
    store.dispatch(bankAction(remainingAmount))
  }
  return (
    <div className="Bank-App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {`$${totalAmount}`}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button 
            data-amount="10000"
            onClick={withdrawMoney}
          >WITHDRAW $10,000</button>
          <button 
            data-amount="5000"
            onClick={withdrawMoney}
            >WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
  )
}
export default BankApp;

