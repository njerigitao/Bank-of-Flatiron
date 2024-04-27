import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
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
     <TransactionTable />
     
    </div>
  );
}

export default App;
