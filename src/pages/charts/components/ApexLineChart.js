import React from "react";
import ApexCharts from "react-apexcharts";
import { useTheme } from "@material-ui/styles";

const series = [
  {
    name: "t_Predicted -----, ",
    data: [10, 7, 7, 5, 4, 6, 6],
  },
  {
    name: "t_Real *****",
    data: [12, 8, 6, 4, 2, 7, 6],
  },
];

export default function ApexLineChart() {
  var theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="area"
      height={350}
    />
  );
}

// ############################################################
function themeOptions(theme) {
  return {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2021-10-19T00:00:00",
        "2021-10-19T01:30:00",
        "2021-10-19T02:30:00",
        "2021-10-19T03:30:00",
        "2021-10-19T04:30:00",
        "2021-10-19T05:30:00",
        "2021-10-19T06:30:00",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    fill: {
      colors: [theme.palette.primary.light, theme.palette.success.light],
    },
    colors: [theme.palette.primary.main, theme.palette.success.main],
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };
}
