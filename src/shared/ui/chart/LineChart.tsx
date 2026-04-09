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
import { useMemo } from "react";

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
  data: number[][];
  timeframe: number;
};

export function LineChart({ data, timeframe }: Props) {
  const getCssVar = (name: string) => {
    if (typeof window === "undefined") return "";
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  };

  const themeColors = useMemo(() => {
    return {
      line: getCssVar("--chart-line"),
      point: getCssVar("--chart-point"),
      tooltipBg: getCssVar("--chart-tooltip-bg"),
      tooltipText: getCssVar("--chart-tooltip-text"),
      gridDot: getCssVar("--chart-grid-dot"),
    };
  }, []);

  const chartData = {
    labels: data.map(([timestamp]) => {
      const date = new Date(timestamp);
      if (timeframe === 1) {
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      return date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      });
    }),
    datasets: [
      {
        label: "Price",
        data: data.map(([, price]) => price),
        borderColor: themeColors.line,
        backgroundColor: "transparent",
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: themeColors.point,
        pointHoverBorderColor: themeColors.point,
        pointHoverBorderWidth: 2,
        borderWidth: 2,
      },
    ],
  };

  const dotBackgroundPlugin = {
    id: "dotBackground",
    beforeDraw: (chart: Chart) => {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;

      const { top, bottom, left, right } = chartArea;

      ctx.save();

      const dotSize = 1.5;
      const spacing = 20;

      for (let y = top - (top % spacing); y <= bottom; y += spacing) {
        for (let x = left - (left % spacing); x <= right; x += spacing) {
          ctx.beginPath();
          ctx.fillStyle = themeColors.gridDot;
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
      mode: "index",
      intersect: false,
    },
    plugins: {
      tooltip: {
        backgroundColor: themeColors.tooltipBg,
        titleColor: themeColors.tooltipText,
        bodyColor: themeColors.tooltipText,
        borderColor: themeColors.line,
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
        grid: { display: false },
        border: { display: false },
        ticks: { display: false },
      },
      x: {
        display: false,
        grid: { display: false },
        border: { display: false },
        ticks: { display: false },
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
      },
    },
  };

  return (
    <Line
      key={themeColors.line}
      data={chartData}
      plugins={[dotBackgroundPlugin]}
      options={options}
    />
  );
}
