import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import useDataService from '../../services/useDataService'; // Import the useDataService hook

const ScatterPlot = ({ filters }) => {
    const svgRef = useRef();
    const { data } = useDataService(); // Use the useDataService hook to fetch data

    useEffect(() => {
        if (data && data.length > 0) {
            const svg = d3.select(svgRef.current);

            // Filter data based on selected filters
            const filteredData = data.filter(item => {
                // Apply filter conditions based on the filters object
                return (
                    (!filters.topic || item.topic === filters.topic) &&
                    (!filters.sector || item.sector === filters.sector)
                    // Add other filter conditions as needed
                    // ...
                );
            });

            // Set up chart dimensions
            const margin = { top: 20, right: 30, bottom: 40, left: 40 };
            const width = 600 - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            // Clear previous chart content
            svg.selectAll('*').remove();

            // Create scales using filtered data
            const xScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredData, d => d.intensity)])
                .nice()
                .range([margin.left, width - margin.right]);

            const yScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredData, d => d.relevance)]) // Assuming 'relevance' property exists
                .nice()
                .range([height - margin.bottom, margin.top]);

            // Append x-axis to the SVG
            svg
                .append('g')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(xScale).ticks(5));

            // Append y-axis to the SVG
            svg
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(yScale));

            // Create circles for each data point based on filtered data
            svg
                .selectAll('.scatter-circle')
                .data(filteredData)
                .enter()
                .append('circle')
                .attr('class', 'scatter-circle')
                .attr('cx', d => xScale(d.intensity))
                .attr('cy', d => yScale(d.relevance)) // Assuming 'relevance' property exists
                .attr('r', 5) // Circle radius
                .attr('fill', 'steelblue')
                .attr('opacity', 0.7);
        }
    }, [data, filters]);

    return (
        <div className="scatter-plot">
            <svg ref={svgRef} width={600} height={400}></svg>
        </div>
    );
};

export default ScatterPlot;
