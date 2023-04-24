import React from "react";

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

export const data = {
  labels: ["google", "instagram", "facebook", "linkedin"],
  datasets: [
    {
      label: "Location Count",
      data: [68, 37, 50, 40, 4],
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

const TopReferralChart = () => {
  return (
    <div className="border rounded-md p-6 text-lg flex-1">
      <div className="flex justify-between mt-3 mb-8">
        <h4 className="font-bold">Top Referral Source</h4>
        <p className="text-[#FF5403] text-sm">View full reports</p>
      </div>
      <div className="flex gap-4 text-sm">
        <ul className="space-y-5">
          <li>
            Google <span className="font-semibold">34%</span>
          </li>
          <li>
            Instagram <span className="font-semibold">19%</span>
          </li>
          <li>
            Facebook <span className="font-semibold">25%</span>
          </li>
          <li>
            Linkedin <span className="font-semibold">20%</span>
          </li>
        </ul>
        <div className=" h-48 self-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TopReferralChart;
