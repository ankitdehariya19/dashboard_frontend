import React, { useState } from "react";
import Header from "../../components/Header/Header";
import BarChart from "../../components/Charts/BarChart";
import BubbleChart from "../../components/Charts/BubbleChart";
import Heatmap from "../../components/Charts/Heatmap";
import PieChart from "../../components/Charts/PieChart";
import LineChart from "../../components/Charts/LineChart";
import ScatterPlot from "../../components/Charts/ScatterPlot";
import useDataService from "../../services/useDataService";
import FilterCard from "../../components/FilterCard/FilterCard";

const DashboardPage = () => {
  const [filters, setFilters] = useState({
    endYear: "",
    topics: [],
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "", // Set default country filter to India
    city: "",
  });

  const handleOptionSelect = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const { data, loading, error } = useDataService();

  const handleFilters = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
    // Implement your filter logic here, e.g., fetch data based on filters
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-full">
      <Header
        filters={filters}
        handleOptionSelect={handleOptionSelect}
        handleFilters={handleFilters}
      />
      <FilterCard
        filters={filters}
        handleOptionSelect={handleOptionSelect}
        handleFilters={handleFilters}
      />
     <div className="overflow-y-scroll h-96 grid grid-cols-2 gap-4 mt-4 p-4 ">
        <BarChart data={data} filters={filters} />
        <BubbleChart data={data} filters={filters} />
        <Heatmap data={data} filters={filters} />
        <PieChart data={data} filters={filters} />
        <LineChart data={data} filters={filters} />
        <ScatterPlot data={data} filters={filters} />
      </div>
    </div>
  );
};

export default DashboardPage;
