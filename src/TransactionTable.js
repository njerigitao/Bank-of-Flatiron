import React from "react";

function TransactionTable(){
    return (
        <div>
            <h1>The Royal Bank of Flatiron</h1>
            <button>Search your Recent Transaction</button>
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
                        </tr>
                    ))}
                 <td></td>
                </tbody>
            </table>
        </div>
    )
}
export default TransactionTable;