import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Heatmap = ({ data, filters }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (data && data.length > 0) {
            const svg = d3.select(svgRef.current);

            // Filter data based on selected filters
            const filteredData = data.filter(item => {
                // Apply filter conditions based on the filters object
                return (
                    (!filters.region || item.region === filters.region) &&
                    (!filters.country || item.country === filters.country)
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

            // Create scales
            const xScale = d3
                .scaleBand()
                .domain(filteredData.map(d => d.region))
                .range([margin.left, width - margin.right])
                .padding(0.1);

            const yScale = d3
                .scaleBand()
                .domain(filteredData.map(d => d.country))
                .range([height - margin.bottom, margin.top])
                .padding(0.1);

            const colorScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredData, d => d.intensity)])
                .range(['lightyellow', 'red']); // Adjust color range as needed

            // Create heatmap rectangles
            svg
                .selectAll('.heatmap-rect')
                .data(filteredData)
                .enter()
                .append('rect')
                .attr('class', 'heatmap-rect')
                .attr('x', d => xScale(d.region))
                .attr('y', d => yScale(d.country))
                .attr('width', xScale.bandwidth())
                .attr('height', yScale.bandwidth())
                .style('fill', d => colorScale(d.intensity)); // Color based on intensity

            // Append axes (optional)
            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale);

            svg
                .append('g')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(xAxis);

            svg
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(yAxis);
        }
    }, [data, filters]);

    return (
        <div className="heatmap">
            <svg ref={svgRef} width={600} height={400}></svg>
        </div>
    );
};

export default Heatmap;
