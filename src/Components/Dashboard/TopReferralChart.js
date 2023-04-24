import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
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

const TopReferralChart = () => {
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
      const sources = apiData.top_sources.map((source) => source.source);
      const count = apiData.top_sources.map((source) => source.count);
      setGraphValue({ sources, count });
    }
  }, [apiData]);

  data = {
    labels: graphValue.country,
    datasets: [
      {
        label: "Location Count",
        data: graphValue.count,
        backgroundColor: ["#844FF6", "#599EEA", "#FAB70A", "#F09468"],
        borderColor: [
          "rgba(132, 79, 246, .5)",
          "rgba(89, 158, 234, .5)",
          "rgba(15, 183, 122, .5)",
          "rgba(250, 183, 10, .5)",
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
        <h4 className="font-bold">Top Referral Source</h4>
        <p className="text-[#FF5403] text-sm">View full reports</p>
      </div>
      <div className="flex gap-4 text-sm">
        <ul className="space-y-5">
          {graphValue &&
            graphValue?.sources?.map((name, index) => (
              <li key={name} className="flex gap-2 capitalize">
                {name}
                <span className="font-semibold inline-block">
                  {apiData.top_sources[index].percent}%
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

export default TopReferralChart;
