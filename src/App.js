import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";

function App() {
  const [transactions, setTransactions] =useState([]);
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
     <TransactionTable transactions={transactions}/>
     <TransactionForm addTransaction={addTransaction} />
     <SearchBar handleSearch={handleSearch} />
     
    </div>
  );
}

export default App;
