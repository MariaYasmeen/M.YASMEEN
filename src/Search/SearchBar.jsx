import React from 'react';


const SearchBar = ({ searchTerm, onSearch, onChange }) => {
    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(); // Call the search handler passed from the parent
    };

    return (
        <form onSubmit={handleSearch} >
            <input 
                type="text" 
                value={searchTerm} 
                onChange={onChange} 
                placeholder="Search..." 
                className='searcinput-bar'
            />
        </form>
    );
};

export default SearchBar;
