import React, {useState} from "react";

function SearchBar({handleSearch}){
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm (e.target.value);
    };
    const handleSubmit = (e)=> {
        e.preventDefault();
        handleSearch(searchTerm);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Search your Recent Transactions"
                value={searchTerm}
                onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;