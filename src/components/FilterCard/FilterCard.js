import React, { useState, useEffect } from 'react';
import CustomDropdown from '../elements/CustomDropdown';
import useDataService from '../../services/useDataService'; // Import the useDataService hook

const FilterCard = ({ handleFilters }) => {
    const [filters, setFilters] = useState({
        countries: [],
        sectors: [],
        topics: [],
        sources: [],
        endYears: [],
        regions: [],
        intensities: [],
        likelihoods: [],
        relevances: [],
    });

    const { data, error } = useDataService(); // Use the useDataService hook to fetch data

    useEffect(() => {
        if (data) {
            const uniqueValues = (key) => Array.from(new Set(data.map((item) => item[key])));
            setFilters({
                countries: uniqueValues('country'),
                sectors: uniqueValues('sector'),
                topics: uniqueValues('topic'),
                sources: uniqueValues('source'),
                endYears: uniqueValues('end_year'),
                regions: uniqueValues('region'),
                intensities: uniqueValues('intensity'),
                likelihoods: uniqueValues('likelihood'),
                relevances: uniqueValues('relevance'),
            });
        }
    }, [data]);

    const handleOptionSelect = (name, value) => {
        let selectedOption = value;
        
        // Check if selectedOption is not a string (e.g., null, undefined, etc.)
        if (typeof selectedOption !== 'string' && selectedOption !== null && selectedOption !== undefined) {
            // Convert selectedOption to string using toString()
            selectedOption = selectedOption.toString();
        }
        
        // Now, selectedOption is guaranteed to be a string or empty string
        const updatedFilters = {
            ...filters,
            [name]: selectedOption,
        };
    
        // Apply dependent filters if needed
        if (name === 'sector') {
            // Apply logic for filtering topics based on the selected sector
            updatedFilters.topics = data.filter(item => item.sector === selectedOption).map(item => item.topic);
        }
        // Add more dependent filters logic as needed
    
        setFilters(updatedFilters);
        handleFilters(updatedFilters);
    };
    

    return (
        <div className="bg-white p-4 mt-4 shadow rounded-lg w-full">
            {error && <div className="text-red-500">Error fetching data. Please try again later.</div>}
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <CustomDropdown
                    label="Country"
                    options={filters.countries}
                    onSelect={(value) => handleOptionSelect('country', value)}
                    dependentFilter="" // No dependent filter for country
                    dependentValue="" // No dependent value for country
                />
                <CustomDropdown
                    label="Sector"
                    options={filters.sectors}
                    onSelect={(value) => handleOptionSelect('sector', value)}
                    dependentFilter="" // No dependent filter for sector
                    dependentValue="" // No dependent value for sector
                />
                <CustomDropdown
                    label="Topic"
                    options={filters.topics}
                    onSelect={(value) => handleOptionSelect('topic', value)}
                    dependentFilter="sector" // Dependent filter for topic is sector
                    dependentValue={filters.sector} // Dependent value for topic is the selected sector
                />
                <CustomDropdown
                    label="Source"
                    options={filters.sources}
                    onSelect={(value) => handleOptionSelect('source', value)}
                    dependentFilter="" // No dependent filter for source
                    dependentValue="" // No dependent value for source
                />
                <CustomDropdown
                    label="End Year"
                    options={filters.endYears}
                    onSelect={(value) => handleOptionSelect('endYear', value)}
                    dependentFilter="" // No dependent filter for end year
                    dependentValue="" // No dependent value for end year
                />
                <CustomDropdown
                    label="Region"
                    options={filters.regions}
                    onSelect={(value) => handleOptionSelect('region', value)}
                    dependentFilter="" // No dependent filter for region
                    dependentValue="" // No dependent value for region
                />
                <CustomDropdown
                    label="Intensity"
                    options={filters.intensities}
                    onSelect={(value) => handleOptionSelect('intensity', value)}
                    dependentFilter="" // No dependent filter for intensity
                    dependentValue="" // No dependent value for intensity
                />
                <CustomDropdown
                    label="Likelihood"
                    options={filters.likelihoods}
                    onSelect={(value) => handleOptionSelect('likelihood', value)}
                    dependentFilter="" // No dependent filter for likelihood
                    dependentValue="" // No dependent value for likelihood
                />
                <CustomDropdown
                    label="Relevance"
                    options={filters.relevances}
                    onSelect={(value) => handleOptionSelect('relevance', value)}
                    dependentFilter="" // No dependent filter for relevance
                    dependentValue="" // No dependent value for relevance
                />
            </form>
        </div>
    );
};

export default FilterCard;
