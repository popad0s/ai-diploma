import React from "react";
import { useTheme } from "@material-ui/styles";
import ApexCharts from "react-apexcharts";

const series = [
  {
    name: "Month 1",
    data: generateData(31, {
      min: -7,
      max: 2,
    }),
  },
  {
    name: "Month 2",
    data: generateData(28, {
      min: -2,
      max: 3,
    }),
  },
  {
    name: "Month 3",
    data: generateData(31, {
      min: 2,
      max: 14,
    }),
  },
  {
    name: "Month 4",
    data: generateData(30, {
      min: 7,
      max: 18,
    }),
  },
  {
    name: "Month 5",
    data: generateData(31, {
      min: 16,
      max: 24,
    }),
  },
  {
    name: "Month 6",
    data: generateData(31, {
      min: 17,
      max: 26,
    }),
  },
  {
    name: "Month 7",
    data: generateData(30, {
      min: 16,
      max: 32,
    }),
  },
  {
    name: "Month 8",
    data: generateData(31, {
      min: 13,
      max: 30,
    }),
  },
  {
    name: "Month 9",
    data: generateData(30, {
      min: 10,
      max: 18,
    }),
  },
  {
    name: "Month 10",
    data: generateData(31, {
      min: 4,
      max: 13,
    }),
  },
  {
    name: "Month 11",
    data: generateData(30, {
      min: 0,
      max: 10,
    }),
  },
  {
    name: "Month 12",
    data: generateData(31, {
      min: -5,
      max: 7,
    }),
  },
];

export default function ApexLineChart() {
  var theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="heatmap"
      height={350}
    />
  );
}

// ##################################################################
function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "Day" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }

  return series;
}

function themeOptions(theme) {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.primary.main],
  };
}
