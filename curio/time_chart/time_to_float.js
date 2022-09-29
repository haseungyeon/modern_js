window.onload = function () {
  const custom_color = {
    checks_ansi_red_bright: '#ffa198',
    checks_ansi_green_bright: '#56d364',
    checks_ansi_yellow_bright: '#e3b341',
    checks_ansi_blue_bright: '#79c0ff',
    checks_ansi_magenta_bright: '#d2a8ff',
    checks_ansi_cyan_bright: '#b3f0ff',
    bs_teal: '#20c997'
  }
  let example_date_data5 = ['09:26:23', '00:04:59', '00:04:57', '00:04:23', '00:04:15'];
  let data = [5,1,4,3,6];
  let h_m_s = [{}];
  // h_m_s['h'] = parseFloat(example_date_data5[0].split(':')[0]);
  // h_m_s['m'] = parseFloat(example_date_data5[0].split(':')[1]);
  // h_m_s['s'] = parseFloat(example_date_data5[0].split(':')[2]);

  let averageTime = document.getElementById('averageTime').getContext('2d');
  let barChartAverageTime = {
    type: 'horizontalBar',
    data: {
      labels: ["createVn", "addDisk", "getCluster", "createVm", "setAgp"],
      datasets: [{
        data: data,
        backgroundColor: [
          custom_color.checks_ansi_green_bright,
          custom_color.checks_ansi_blue_bright,
          custom_color.checks_ansi_yellow_bright,
          custom_color.checks_ansi_magenta_bright,
          custom_color.checks_ansi_red_bright,
        ],
      },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Average WF Execution Time',
        fontColor: '#FFFFFF'
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: '#FFFFFF',
            callback: function (value, index, values) {
              console.log("value:", value);
              if (value && value[0] != parseFloat(0))
                return value[0] + 'h';
              else if (value && value[1] != parseFloat(0))
                return value[1] + 'm';
              else if (value && value[2] != parseFloat(0))
                return value[2] + 's';
              else
                return;
            }
          },
          gridLines: {
            color: '#777777',
            drawOnChartArea: false,
            lineWidth: 1
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#FFFFFF',
            fontSize: 10
          },
          gridLines: {
            color: '#FFFFFF',
            drawTicks: false
          }
        }]
      }
    }
  }

  function makeAverageWfTimeChart(elementContext, chartObj) {
    let temp_list = [[],[],[],[],[]];
    for (i = 0; i < example_date_data5.length; i++) {
      let time_sliced = '';
      let h_m_s = 0;
      for (j = 0; j < example_date_data5[i].length; j++){
        if (example_date_data5[i][j] != ':') {
          time_sliced += example_date_data5[i][j];
          if (j == example_date_data5[i].length-1) {
            temp_list[i][h_m_s] = time_sliced;
          }
        }
        else if (example_date_data5[i][j] == ':') {
          temp_list[i][h_m_s] = time_sliced;
          time_sliced = '';
          h_m_s++;
        }
      }
      console.log("temp_list:", temp_list);
    }
    if (example_date_data5){
      // for (i=0;i<example_date_data5.length;i++){
      //   chartObj.options.scales.xAxes[0].ticks.callback(example_date_data5[i]);
      // }
      chartObj.options.scales.xAxes[0].ticks.callback(example_date_data5);
      new Chart(elementContext, chartObj);
    }
  }
  makeAverageWfTimeChart(averageTime, barChartAverageTime);
}