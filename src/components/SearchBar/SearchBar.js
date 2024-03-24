import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className="flex items-center bg-white p-4 shadow rounded-lg">
            <FiSearch className="mr-2 text-gray-500" />
            <input
                type="text"
                placeholder="Search..."
                className="outline-none focus:outline-none flex-grow"
            />
        </div>
    );
};

export default SearchBar;
