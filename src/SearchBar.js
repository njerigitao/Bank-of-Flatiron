import React, {useState} from "react";

function SearchBar({handleSearch}){
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm (e.target.value);
    };
    const handleSubmit = (e)=> {
        e.preventDefault();
        handleSearch(searchTerm);
    }
}

export default SearchBar;