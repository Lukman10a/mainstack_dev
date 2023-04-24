import { useQuery } from "@tanstack/react-query";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
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

export const data = {
  labels: ["Nigeria", "Germany", "Ghana", "Finland", "United Kingdom"],
  datasets: [
    {
      label: "Location Count",
      data: [68, 37, 50, 40, 4],
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

  return (
    <div className="border rounded-md p-6 text-lg flex-1">
      <div className="flex justify-between mt-3 mb-8">
        <h4 className="font-bold">Top Locations</h4>
        <p className="text-[#FF5403] text-sm">View full reports</p>
      </div>
      <div className="flex gap-4">
        <ul className="space-y-5 text-sm">
          <li>
            Nigeria <span className="font-semibold">34%</span>
          </li>
          <li>
            United States <span className="font-semibold">19%</span>
          </li>
          <li>
            Netherlands <span className="font-semibold">25%</span>
          </li>
          <li>
            Andorra <span className="font-semibold">20%</span>
          </li>
          <li>
            United Kingdom <span className="font-semibold">2%</span>
          </li>
        </ul>
        <div className="h-48 self-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TopLocationChart;
