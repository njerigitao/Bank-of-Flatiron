import React, {useState} from "react";

function TransactionForm({ addTransaction }){
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        category: '',
        amount: '',
     }) ;

     const handleChange =(e) => {
        setFormData({...formData, [e.target.name]: e.target.value});   
     };
     const handleSubmit = (e) =>{
        e.preventDefault();
        addTransaction(formData);
        setFormData({
            date: '',
            description: '',
            category: '',
            amount: ''

        });
     };
     return (
        <div>
            <h2>Search your Recent Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input type="text"
                name="date"
                value={formData.date}
                onChange={handleChange} />
                <label>Amount:</label>
                <input type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange} />
                <label>Category:</label>
                <input type="text"
                name="category"
                value={formData.category}
                onChange={handleChange} />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
     );

}
export default TransactionForm;