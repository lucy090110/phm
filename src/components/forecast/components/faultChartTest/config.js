import { xAxisData } from "../../common/config";
export const option = {
    legend: {
        data: ['预测值', '实际值'],
        textStyle: {
            color: '#fff'
        },
        top:20
    },
    xAxis: {
      type: 'category',
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      data: xAxisData
    },
    yAxis: {
      type: 'value'
    },
    grid: {
        left:40,
        right:40,
        top:80
    },
    series: [
      {
          name:'预测值',
        data: [72, 72, 73, 74, 78, 76, 78, 79, 80, 80, 81, 83, 82, 82, 84, 83, 85, 84, 86,87,88,89,92],
        type: 'line',
      },
      {
          name:'实际值',
        data: [60, 65, 71, 75, 74, 78, 78, 79, 82, 82, 83, 84, 85, 86, 87, 88, 89, 89, 90,91,92,92,94],
        type: 'line',
      }
    ]
  };