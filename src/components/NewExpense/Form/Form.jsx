import React, { useState } from "react";
import '../Form/form.css'

export default function Form(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const AddNewExpense = (e)=>{
    e.preventDefault()
    const newExpense = {
        name: name,
        amount: +amount,
        date: new Date(date)
    }
    props.onSaveNewExpense(newExpense);
    setName('')
    setAmount('')
    setDate('')
  }
  return (
    <form onSubmit={AddNewExpense}>
      <div className="input-container">
        <div className="input-item">
          <label style={{ marginRight: '26px' }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter name here ..."
          />
        </div>
        <div className="input-item">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder="Enter amount here ..."
          />
        </div>
        <div className="input-item">
          <label style={{ marginRight: '36px' }}>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-container">
        <button type="submit">ADD</button>
        <button style={{ backgroundColor: '#ccc' }} type="button" onClick={props.onCancel}>
          CANCEL
        </button>
      </div>
    </form>
  );
}
