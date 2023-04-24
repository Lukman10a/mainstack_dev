import { useQuery } from "@tanstack/react-query";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "left",
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    // aspectRatio: 1,
  },
};

const TopLocationChart = () => {
  let data;
  const [graphValue, setGraphValue] = useState({});
  const {
    isLoading,
    error,
    data: apiData,
  } = useQuery({
    queryKey: ["locatonsData"],
    queryFn: () =>
      fetch("https://fe-task-api.mainstack.io/").then((res) => res.json()),
  });

  useEffect(() => {
    if (apiData) {
      console.log(apiData);
      const country = apiData.top_locations.map((location) => location.country);
      const count = apiData.top_locations.map((location) => location.count);
      setGraphValue({ country, count });
    }
  }, [apiData]);

  data = {
    labels: graphValue.country,
    datasets: [
      {
        label: "Location Count",
        data: graphValue.count,
        backgroundColor: [
          "rgba(255, 99, 132, .7)",
          "rgba(54, 162, 235, .7)",
          "rgba(255, 206, 86, .7)",
          "rgba(75, 192, 192, .7)",
          "rgba(153, 102, 255, .7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="border rounded-md p-6 text-lg flex-1">
      <div className="flex justify-between mt-3 mb-8">
        <h4 className="font-bold">Top Locations</h4>
        <p className="text-[#FF5403] text-sm">View full reports</p>
      </div>
      <div className="flex gap-4">
        <ul className="space-y-5 text-sm">
          {graphValue &&
            graphValue?.country?.map((country, index) => (
              <li key={country} className="flex gap-2 capitalize">
                {country}
                <span className="font-semibold inline-block">
                  {apiData.top_locations[index].percent}%
                </span>
              </li>
            ))}
        </ul>
        <div className="h-48 self-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TopLocationChart;
