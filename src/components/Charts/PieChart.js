import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import useDataService from '../../services/useDataService'; // Import the useDataService hook

const PieChart = ({ filters }) => {
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
            const width = 600;
            const height = 400;
            const radius = Math.min(width, height) / 2;

            // Clear previous chart content
            svg.selectAll('*').remove();

            // Create pie generator
            const pie = d3
                .pie()
                .value(d => d.intensity) // Assuming intensity is the value for each topic
                .sort(null);

            // Create arc generator
            const arc = d3
                .arc()
                .innerRadius(0)
                .outerRadius(radius);

            // Create color scale (optional)
            const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

            // Generate pie chart data
            const pieData = pie(filteredData);

            // Append pie slices to SVG
            svg
                .append('g')
                .attr('transform', `translate(${width / 2},${height / 2})`)
                .selectAll('path')
                .data(pieData)
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', (d, i) => colorScale(i))
                .attr('stroke', 'white')
                .attr('stroke-width', 2)
                .attr('opacity', 0.7);

            // Add labels to pie slices (optional)
            svg
                .selectAll('.pie-label')
                .data(pieData)
                .enter()
                .append('text')
                .attr('class', 'pie-label')
                .attr('transform', d => `translate(${arc.centroid(d)})`)
                .attr('dy', '0.35em')
                .text(d => d.data.topic) // Assuming each data item has a 'topic' property
                .style('font-size', '10px')
                .style('text-anchor', 'middle');
        }
    }, [data, filters]);

    return (
        <div className="pie-chart">
            <svg ref={svgRef} width={600} height={400}></svg>
        </div>
    );
};

export default PieChart;
