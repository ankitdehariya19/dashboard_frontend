import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BarChart from "../../components/Charts/BarChart";
import apiService from "../../services/apiService";
import IntensityLineChart from "../../components/Charts/LineChart";
import PolarAreaChart from "../../components/Charts/PolarAreaChart";
import StackedBarChart from "../../components/Charts/StackedBarChart";

const AVAILABLE_LABELS = [
  "source",
  "pestle",
  "sector",
  "topic",
  "country",
  "region",
];

const AVAILABLE_VALUES = [
  "averageIntensity",
  "relevance",
  "likelihood",
  "end_year",
  "start_year",
];

const DashboardPage = () => {
  const [aggregatedData, setAggregatedData] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("topic");
  const [selectedValue, setSelectedValue] = useState("averageIntensity");
  const [lineChartData, setLineChartData] = useState([]);
  const [polarChartData, setPolarChartData] = useState([]);
  const [stackedChartData, setStackedChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchData();

        // Update aggregatedData for BarChart
        const aggregatedDataBarChart = aggregateDataByLabel(data, selectedLabel);
        setAggregatedData(aggregatedDataBarChart);

        // Extract data for LineChart
        const extractedLineChartData = data.map((item) => ({
          published: new Date(Date.parse(item.published)), // Parse date
          intensity: item.intensity,
        }));
        setLineChartData(extractedLineChartData);

        // Structure data for PolarAreaChart
        const polarChartData = structurePolarChartData(data);
        setPolarChartData(polarChartData);

        // Filter and structure data for StackedBarChart
        const filteredStackedChartData = filterStackedChartData(data);
        setStackedChartData(filteredStackedChartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedLabel, selectedValue]);

  const handleLabelChange = (event) => {
    setSelectedLabel(event.target.value);
  };

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const aggregateDataByLabel = (data, label) => {
    const groupedData = {};
    data.forEach((item) => {
      const labelValue = item[label];
      if (!groupedData[labelValue]) {
        groupedData[labelValue] = { count: 0, sum: 0 };
      }

      if (selectedValue === "averageIntensity") {
        groupedData[labelValue].sum += item.intensity;
        groupedData[labelValue].count++;
      } else if (
        selectedValue === "relevance" ||
        selectedValue === "likelihood"
      ) {
        groupedData[labelValue].sum += item[selectedValue];
        groupedData[labelValue].count++;
      } else {
        groupedData[labelValue].count++;
      }
    });

    const aggregatedData = Object.keys(groupedData).map((labelValue) => ({
      [label]: labelValue,
      [selectedValue]:
        selectedValue === "averageIntensity"
          ? (groupedData[labelValue].sum / groupedData[labelValue].count).toFixed(2)
          : groupedData[labelValue].sum,
    }));

    return aggregatedData;
  };

  const structurePolarChartData = (data) => {
    return data.map((item) => ({
      sector: item.sector,
      topic: item.topic,
      intensity: parseFloat(item.averageIntensity),
    }));
  };

  const filterStackedChartData = (data) => {
    return data.map((item) => ({
      topic: item.topic,
      intensity: item.intensity,
    }));
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-full">
      <Header />

      <div className="flex justify-center my-4">
        <label htmlFor="labelDropdown" className="mr-2">
          Select Label:
        </label>
        <select
          id="labelDropdown"
          value={selectedLabel}
          onChange={handleLabelChange}
        >
          {AVAILABLE_LABELS.map((label) => (
            <option key={label} value={label}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </option>
          ))}
        </select>

        <label htmlFor="valueDropdown" className="ml-4 mr-2">
          Select Value:
        </label>
        <select
          id="valueDropdown"
          value={selectedValue}
          onChange={handleValueChange}
        >
          {AVAILABLE_VALUES.map((value) => (
            <option key={value} value={value}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </option>
          ))}
        </select>
      </div>
  
      <div className=" ">
        <BarChart
          data={aggregatedData}
          label={selectedLabel}
          value={selectedValue}
        />
        <IntensityLineChart data={lineChartData} />

        <PolarAreaChart data={polarChartData} />
        <StackedBarChart data={stackedChartData} />
      </div>
    </div>
  );
};

export default DashboardPage;
