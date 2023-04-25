import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export const options = {
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const PageViews = () => {
  let data;
  const [graphValue, setGraphValue] = useState({ dates: [], views: [] });
  const {
    isLoading,
    error,
    data: apiData,
  } = useQuery({
    queryKey: ["viewsData"],
    queryFn: () =>
      fetch("https://fe-task-api.mainstack.io/").then((res) => res.json()),
  });

  useEffect(() => {
    if (apiData) {
      const dates = Object.keys(apiData.graph_data.views).map((date) =>
        moment(date).format("MMM D, YY")
      );
      const views = Object.values(apiData.graph_data.views);
      setGraphValue({ dates, views });
    }
  }, [apiData]);

  data = {
    labels: graphValue.dates,
    datasets: [
      {
        label: "",
        data: graphValue.views,
        borderColor: "rgba(255, 84, 3, .8)",
        backgroundColor: "rgba(255, 84, 3,.5)",
      },
    ],
  };

  if (isLoading)
    return (
      <button
        type="button"
        className="bg-indigo-500 rounded-lg p-3 text-white flex gap-2 items-center"
        disabled
      >
        <span className="animate-pulse rounded-xl bg-white shadow-md w-5 h-5 inline-block"></span>
        <span>Processing...</span>
      </button>
    );

  if (error) return <h4>{`An error has occurred:  + ${error.message}`}</h4>;

  return (
    <div>
      <p className="text-sm text-[#31373D]">All time</p>
      <p className="text-5xl my-7 font-bold">
        {graphValue.views.length !== 0 &&
          graphValue.views.reduce((x, y) => x + y)}
      </p>
      <div className="w-full min-h-60">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default PageViews;
