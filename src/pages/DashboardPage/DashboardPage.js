import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header"; // Assuming Header component exists
import BarChart from "../../components/Charts/BarChart"; // Assuming BarChart component exists
import LineChart from "../../components/Charts/LineChart";
import PieChart from "../../components/Charts/PieChart";
import RadarChart from "../../components/Charts/RadarChart";
import LoadingSpinner from "../../components/elements/LoadingSpinner"; // Import LoadingSpinner

import apiService from "../../services/apiService"; // Assuming apiService exists
import CustomDropdown from "../../components/elements/CustomDropdown";

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
  const [selectedLabel, setSelectedLabel] = useState("sector");
  const [selectedValue, setSelectedValue] = useState("likelihood");
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchData();
        const aggregatedData = aggregateDataByLabel(data, selectedLabel);
        setAggregatedData(aggregatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false regardless of success or error
      }
    };

    fetchData();
  }, [selectedLabel, selectedValue]); // Update data when label or value changes

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

      // Handle different value types based on selectedValue
      if (selectedValue === "averageIntensity") {
        groupedData[labelValue].sum += item.intensity;
        groupedData[labelValue].count++;
      } else if (
        selectedValue === "relevance" ||
        selectedValue === "likelihood"
      ) {
        groupedData[labelValue].sum += item[selectedValue];
        groupedData[labelValue].count++;
      } else if (
        selectedValue === "start_year" ||
        selectedValue === "end_year"
      ) {
        // Check if the start_year or end_year is a valid number
        const year = parseInt(item[selectedValue]);
        if (!isNaN(year)) {
          groupedData[labelValue].sum += year;
          groupedData[labelValue].count++;
        }
      } else {
        groupedData[labelValue].count++;
      }
    });

    const aggregatedData = Object.keys(groupedData).map((labelValue) => ({
      [label]: labelValue,
      [selectedValue]:
        selectedValue === "averageIntensity"
          ? (
              groupedData[labelValue].sum / groupedData[labelValue].count
            ).toFixed(2) // Calculate average
          : groupedData[labelValue].sum, // Other values (sum, count)
    }));

    return aggregatedData;
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-full">
      {/* Conditionally render LoadingSpinner based on isLoading state */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header />

          {/* <div className="flex justify-center my-4">
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
          </div> */}
          <div className="flex justify-center my-4">
            <div className="flex justify-center items-center">
              <label htmlFor="labelDropdown" className="mr-2">
                Select Label:
              </label>
              <CustomDropdown
                options={AVAILABLE_LABELS}
                selectedOption={selectedLabel}
                setSelectedOption={setSelectedLabel}
              />
            </div>

            <div className="flex justify-center items-center">
              <label htmlFor="valueDropdown" className="ml-4 mr-2">
                Select Value:
              </label>
              <CustomDropdown
                options={AVAILABLE_VALUES}
                selectedOption={selectedValue}
                setSelectedOption={setSelectedValue}
              />
            </div>
          </div>
          <div className="  flex flex-col">
            <div className="flex">
              <div className="w-8/12 h-fit">
                <BarChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
              <div className="w-4/12 h-fit">
                <PieChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-8/12 h-fit">
                <LineChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
              <div className="w-4/12 h-fit">
                <RadarChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
