import React, { useEffect, useState, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const CustomDropdown = ({ label, options, onSelect, dependentFilter, dependentValue }) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        if (dependentFilter && dependentValue) {
            // Filter options based on the dependent filter and its selected value
            const filtered = options.filter(option => option[dependentFilter] === dependentValue);
            setFilteredOptions(filtered);
        } else {
            // If no dependency, use all options
            setFilteredOptions(options);
        }
    }, [dependentFilter, dependentValue, options]);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setInputValue('');
        onSelect(option);
    };

    const handleInputChange = (e) => {
        const input = e.target.value.toLowerCase();
        setInputValue(input);
        setFilteredOptions(
            options.filter((option) => option.toLowerCase().includes(input))
        );
    };

    return (
        <div className="relative">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between py-2 px-4 w-full bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-blue-500"
            >
                <input
                    type="text"
                    id={label}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={`Search ${label}`}
                    className="placeholder-text-gray-500 px-2 py-1 outline-none w-full"
                />
                <BiChevronDown
                    size={24}
                    className={`text-gray-500 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </div>
            {isOpen && (
                <ul className="absolute z-10 top-full left-0 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
                    {filteredOptions.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                                selectedOption && selectedOption.toLowerCase() === option.toLowerCase()
                                    ? 'bg-orange-500 text-white'
                                    : 'text-gray-800'
                            }`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
