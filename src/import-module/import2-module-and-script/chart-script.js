let ctx = document.getElementById("myChart").getContext("2d");

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Looping tension',
    data: [65, 59, 80, 81, 26, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    animations: {
      tension: {
        duration: 1500,
        easing: 'linear',
        from: 0.3,
        to: 0.1,
        loop: true
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
  }
};

let myChart = new Chart(ctx, config);