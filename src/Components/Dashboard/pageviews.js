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
  maintainAspectRatio: false,
  responsive: true,

  // scales: {
  //   x: {
  //     type: "time",
  //     time: {
  //       unit: "day",
  //       displayFormats: {
  //         day: "MMM D, YYYY",
  //       },
  //     },
  //   },
  // },
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const PageViews = () => {
  let data;
  const [graphValue, setGraphValue] = useState({});
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
        label: "Page Views",
        data: graphValue.views,
        borderColor: "rgba(255, 84, 3, .8)",
        backgroundColor: "rgba(255, 84, 3,.5)",
      },
    ],
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="w-full min-h-60">
      <Line options={options} data={data} />
    </div>
  );
};

export default PageViews;
