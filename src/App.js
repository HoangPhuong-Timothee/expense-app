import React, { useState } from 'react'
import AddExpense from './components/NewExpense/AddExpense/AddExpense';
import Content from './components/Content/Content'

const mockData = [
  {
    id: 1,
    name: "Some Book",
    amount: 50,
    date: new Date(2022, 1, 16)
  },
  {
    id: 2,
    name: "Electricity Bill",
    amount: 75,
    date: new Date(2022, 10, 10)
  },
  {
    id: 3,
    name: "New Bike",
    amount: 100,
    date: new Date(2022, 5, 8)
  },
]

function App() {
  const [expenses, setExpenses] = useState(mockData);
  const handleAddExpenses = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <AddExpense onAddExpense={handleAddExpenses}/>
      <Content items={expenses}/>
    </div>
  );
}

export default App;
