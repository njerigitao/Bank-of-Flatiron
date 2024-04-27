import React, {useState} from "react";

function SearchBar({handleSearch}){
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm (e.target.value);
    };
    co
}

export default SearchBar;