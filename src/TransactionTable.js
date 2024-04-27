import React from "react";

function TransactionTable(){
    return (
        <div>
        <h2>
            <button>Search your Recent Transaction</button>
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index)=> (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                 <td></td>
                </tbody>
            </table>
        </div>
    )
}
export default TransactionTable;