import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic with the search term
    console.log('Search term:', searchTerm);

    // Example: Filter products based on the search term
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        value={searchResults}
      
        onChange={handleSearchChange}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default Search;
