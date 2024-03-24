import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BubbleChart = ({ data, filters }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (data && data.length > 0) {
            const svg = d3.select(svgRef.current);

            // Filter data based on selected filters
            const filteredData = data.filter(item => {
                return (
                    (!filters.country || item.country === filters.country) &&
                    (!filters.sector || item.sector === filters.sector)
                    // Add other filter conditions as needed
                    // ...
                );
            });

            // Set up chart dimensions and scales based on filteredData
            const margin = { top: 20, right: 30, bottom: 40, left: 40 };
            const width = 600 - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            // Clear previous chart content
            svg.selectAll('*').remove();

            // Create scales
            const xScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredData, d => d.relevance)])
                .nice()
                .range([margin.left, width - margin.right]);

            const yScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredData, d => d.likelihood)])
                .nice()
                .range([height - margin.bottom, margin.top]);

            const sizeScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredData, d => d.intensity)])
                .range([5, 20]); // Adjust the range for bubble size as needed

            // Create axes
            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale);

            // Append axes to the SVG
            svg
                .append('g')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(xAxis);

            svg
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(yAxis);

            // Create bubbles
            svg
                .selectAll('.bubble')
                .data(filteredData)
                .enter()
                .append('circle')
                .attr('class', 'bubble')
                .attr('cx', d => xScale(d.relevance))
                .attr('cy', d => yScale(d.likelihood))
                .attr('r', d => sizeScale(d.intensity))
                .attr('fill', 'steelblue')
                .attr('opacity', 0.7);
        }
    }, [data, filters]);

    return (
        <div className="bubble-chart">
            <svg ref={svgRef} width={600} height={400}></svg>
        </div>
    );
};

export default BubbleChart;
