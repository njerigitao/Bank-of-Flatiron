import React, {  useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import './App.css';

function App() {
  const [transactions, setTransactions] =useState([
      {date: '2024-07-03', description: 'Gym', category: 'Health', amount: '2000'},
      { date: '2024-01-15', description: 'Artcafe', category: 'Food', amount: 150 },
      { date: '2023-11-06', description: 'Insurance', category: 'Utilities', amount: 6000 },
      { date: '2023-08-02', description: 'Kukito', category: 'Food', amount: 300 }
  ]);
  const [searchTerm, setSearchTerm] =useState('')

  const addTransaction =(newTransaction)=> {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions= transactions.filter(transaction =>
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>
      <input type="text" placeholder="Search by description" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <TransactionForm addTransaction={addTransaction} />
     <TransactionTable transactions={filteredTransactions} />
     
    </div>
  );
}

export default App;
