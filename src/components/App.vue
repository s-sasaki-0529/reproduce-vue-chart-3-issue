<template>
  <div id="app">
    <PieChart :chartData="pieData" />
    <LineChart :chartData="lineData" />
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
import { PieChart, LineChart } from "vue-chart-3";

Chart.register(...registerables);

export default {
  components: {
    PieChart,
    LineChart,
  },
  computed: {
    pieData() {
      return {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
    },
    lineData() {
      return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
    },
  },
};
</script>
