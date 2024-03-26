// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const IntensityLineChart = ({ data }) => {
//   // Aggregate data by month
//   const aggregatedData = {};
//   data.forEach((item) => {
//     const publishedDate = new Date(item.published); // Ensure date is properly parsed
//     const monthYear = `${publishedDate.getFullYear()}-${publishedDate.getMonth() + 1}`; // Group by month and year

//     if (!aggregatedData[monthYear]) {
//       aggregatedData[monthYear] = { sum: 0, count: 0 };
//     }

//     aggregatedData[monthYear].sum += item.intensity;
//     aggregatedData[monthYear].count++;
//   });

//   const chartData = {
//     labels: Object.keys(aggregatedData),
//     datasets: [
//       {
//         label: 'Average Intensity',
//         data: Object.values(aggregatedData).map(
//           (aggregate) => aggregate.sum / aggregate.count
//         ),
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="w-full">
//       <Line
//         data={chartData}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             yAxes: [
//               {
//                 ticks: {
//                   beginAtZero: true,
//                 },
//               },
//             ],
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default IntensityLineChart;


import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data, label, value }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const labels = data.map(item => item[label]);
    const values = data.map(item => item[value]);
    

    const randomPastelColor = () => {
      const r = Math.floor(Math.random() * 155) + 100;
      const g = Math.floor(Math.random() * 155) + 100;
      const b = Math.floor(Math.random() * 155) + 100;
      return `rgb(${r}, ${g}, ${b})`;
    };

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: value.charAt(0).toUpperCase() + value.slice(1), // Capitalize value for display
            data: values,
            borderColor: randomPastelColor(),
            backgroundColor: 'transparent',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: label.charAt(0).toUpperCase() + label.slice(1), // Capitalize label for display
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            title: {
              display: true,
              text: value.charAt(0).toUpperCase() + value.slice(1), // Capitalize value for display
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, label, value]); // Update chart when data, label, or value props change

  return (
    <div className="max-w-screen-xl mx-auto">
      <canvas ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};

export default LineChart;
