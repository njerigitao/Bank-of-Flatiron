import React from "react";

function TransactionTable({ transactions}){
    return (
        <div>
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
                    {transactions.map(({date, description, category, amount}, index)=> (
                        <tr key={index}>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td>{category}</td>
                            <td>{amount}</td>
                        </tr>
                    ))}
                 <td></td>
                </tbody>
            </table>
        </div>
    );
}
export default TransactionTable;