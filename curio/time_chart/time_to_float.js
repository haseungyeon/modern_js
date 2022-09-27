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
        data: example_date_data5,
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
              if (value && value['h'] != parseFloat(0))
                return value['h'] + 'h';
              else if (value && value['m'] != parseFloat(0))
                return value['m'] + 'm';
              else if (value && value['s'] != parseFloat(0))
                return value['s'] + 's';
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
    // 예시 example_date_data5 = data
    // let h_m_s = {};
    for (i = 0; i < example_date_data5.length; i++) {
      temp_list = parseFloat(example_date_data5[i].split(':'));
      console.log(temp_list);
      // h_m_s[i]['h'] = parseFloat(example_date_data5[i].split(':')[0]);
      // h_m_s[i]['m'] = parseFloat(example_date_data5[i].split(':')[1]);
      // h_m_s[i]['s'] = parseFloat(example_date_data5[i].split(':')[2]);
      // chartObj.options.scales.xAxes[i].ticks.callback(h_m_s[i]);
    }
    console.log(h_m_s);
    if (example_date_data5)
      new Chart(elementContext, chartObj);
  }
  makeAverageWfTimeChart(averageTime, barChartAverageTime);
}