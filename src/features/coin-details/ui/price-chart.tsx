"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  Chart,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

type Props = {
  prices: number[][];
  timeframe: number;
};

export function PriceChart({ prices, timeframe }: Props) {
  const chartData = {
    labels: prices.map(([timestamp]) => {
      const date = new Date(timestamp);
      if (timeframe === 1) {
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }),
    datasets: [
      {
        label: "Price",
        data: prices.map(([, price]) => price),
        borderColor: "#FFFFFF",
        backgroundColor: "transparent",
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#FFFFFF",
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBorderWidth: 2,
        borderWidth: 2,
      },
    ],
  };

  const dotBackgroundPlugin = {
    id: "dotBackground",
    beforeDraw: (chart: Chart) => {
      const { ctx, chartArea } = chart;
      const { top, bottom, left, right } = chartArea;

      ctx.save();

      const dotSize = 1.5;
      const spacing = 20;

      for (let y = top - (top % spacing); y <= bottom; y += spacing) {
        for (let x = left - (left % spacing); x <= right; x += spacing) {
          ctx.beginPath();
          ctx.fillStyle = "#1f1f1f";
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    },
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      tooltip: {
        backgroundColor: "#2A2A2A",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context: any) => {
            return `$${context.parsed.y.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderJoinStyle: "round",
        borderCapStyle: "round",
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 0,
        right: 0,
      },
    },
  };

  return (
    <div className="w-full h-[450px] relative">
      <Line
        data={chartData}
        options={options}
        plugins={[dotBackgroundPlugin]}
      />
    </div>
  );
}
