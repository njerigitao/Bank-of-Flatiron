import React, {  useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
import './App.css';

function App() {
  const [transactions, setTransactions] =useState([
      {date: '2024-07-03', description: 'Gym', category: 'Health', amount: '2000'},
      { date: '2024-01-15', description: 'Artcafe', category: 'Food', amount: 150 },
      { date: '2023-11-06', description: 'Insurance', category: 'Utilities', amount: 6000 },
      { date: '2023-08-02', description: 'Kukito', category: 'Food', amount: 300 }
  ]);

  const addTransaction =(newTransaction)=> {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    const filteredTransactions= transactions.filter(transaction=> transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredTransactions;
  }
  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>
      <SearchBar handleSearch={handleSearch} />
      <TransactionForm addTransaction={addTransaction} />
     <TransactionTable transactions={transactions} />
     
    </div>
  );
}

export default App;
