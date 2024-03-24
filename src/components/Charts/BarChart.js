import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, filters }) => {
  const svgRef = useRef();

  const filteredData = useMemo(() => {
    if (data) {
      return data.filter(item => (
        (!filters.country || item.country === filters.country) &&
        (!filters.sector || item.sector === filters.sector)
      ));
    }
    return [];
  }, [data, filters]);

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      const svg = d3.select(svgRef.current);

      const margin = { top: 20, right: 30, bottom: 40, left: 40 };
      const width = 600 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const xScale = d3
        .scaleBand()
        .domain(filteredData.map(d => d.topic))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(filteredData, d => d.intensity)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale).ticks(5);

      svg.selectAll('*').remove();

      svg
        .append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(xAxis)
        .append('text') // X-axis label
        .attr('x', width / 2)
        .attr('y', margin.bottom - 10)
        .attr('text-anchor', 'middle')
        .text('Topic');

      svg
        .append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(yAxis)
        .append('text') // Y-axis label
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -margin.left + 10)
        .attr('text-anchor', 'middle')
        .text('Intensity');

      svg
        .selectAll('.bar')
        .data(filteredData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.topic))
        .attr('y', d => yScale(d.intensity))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - margin.bottom - yScale(d.intensity))
        .attr('fill', 'steelblue')
        .transition() // Add transition for smooth updates
        .duration(500)
        .attr('x', d => xScale(d.topic))
        .attr('y', d => yScale(d.intensity))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - margin.bottom - yScale(d.intensity));
    }
  }, [filteredData]);

  return (
    <div className="bar-chart">
      <h3>Bar Chart: Intensity by Topic</h3>
      <svg ref={svgRef} width={600} height={400}></svg>
    </div>
  );
};

export default BarChart;
