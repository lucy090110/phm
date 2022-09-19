import { xAxisData2, yAxisData } from "../../common/config";
export const option = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: 20,
    left:50,
    right:30
  },
  // legend: {},
  // toolbox: {
  //   show: true,
  //   feature: {
  //     dataZoom: {
  //       yAxisIndex: 'none'
  //     },
  //     dataView: { readOnly: false },
  //     magicType: { type: ['line', 'bar'] },
  //     restore: {},
  //     saveAsImage: {}
  //   }
  // },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: xAxisData2
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} %'
    }
  },
  series: [
    // {
    //   name: 'Highest',
    //   type: 'line',
    //   data: [10, 11, 13, 11, 12, 12, 9],
    //   markPoint: {
    //     data: [
    //       { type: 'max', name: 'Max' },
    //       { type: 'min', name: 'Min' }
    //     ]
    //   },
    //   markLine: {
    //     data: [{ type: 'average', name: 'Avg' }]
    //   }
    // },
    {
      name: '高浓度磨浆机健康度',
      type: 'line',
      data: yAxisData,
      markPoint: {
        data: [{ name: '周最低', value: 10, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
};