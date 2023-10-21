import React, { useState } from 'react'
import Form from '../Form/Form'
import '../AddExpense/add-expense.css'

export default function AddExpense(props) {
  const [isAddExpense, setIsAddExpense] = useState(false)
  const handleSaveNewExpense = (enteredData)=>{
    const expenseData = {
        ...enteredData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsAddExpense(false)
  }
  return (
    <div className='add-expense'>
        {!isAddExpense && <button onClick={()=>{setIsAddExpense(true)}}>ADD NEW EXPENSE</button>}
        {isAddExpense && <Form onSaveNewExpense={handleSaveNewExpense} onCancel={()=>setIsAddExpense(false)}/>}
    </div>
  )
}
