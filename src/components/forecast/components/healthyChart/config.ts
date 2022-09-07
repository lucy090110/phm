import { xAxisData2, yAxisData, yAxisData2, yAxisData3 } from '../../common/config';
const splitLineStyle = {
    show: true,
    lineStyle: {
        color: '#555'
    }
};
const labelStyle = {
    color: '#fff'
};
export const option = {
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    // grid: {
    //     top: 20,
    //     show: true,
    //     borderColor: '#df1111'
    // },
    legend: {
        data: ['xxx健康度'],
        // selected: {
        //     // eslint-disable-next-line prettier/prettier
        //     高浓度磨浆机健康度: true,
        //     // eslint-disable-next-line prettier/prettier
        //     选择设备时显示该折线: false,
        //     // eslint-disable-next-line prettier/prettier
        //     选择设备2时显示该折线: false
        // },
        textStyle: {
            color: '#fff'
        }
    },
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
        axisLabel: labelStyle,
        data: xAxisData2
        // splitLine: {
        //     show: false
        // }
    },
    yAxis: {
        type: 'value',
        name: '健康分数',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff'
        },
        axisLabel: {
            // formatter: '{value} ',
            ...labelStyle
        },
        splitLine: splitLineStyle
    },
    series: {
        name: 'xxx健康度',
        type: 'line',
        data: yAxisData
    }
    // tooltip: {
    //     formatter: function (params) {
    //         console.log(70000, params);
    //         const param = params;
    //         return [
    //             '1: ' + param[1] + '<br/>',
    //             '2: ' + param[1] + '<br/>',
    //             '333: ' + param[1] + '<br/>',
    //             '44444: ' + param[1] + '<br/>'
    //         ].join('');
    //     }
    // },
    // markPoint: {
    //     data: [{ name: '周最低', value: 10, xAxis: 1, yAxis: -1.5 }]
    // }
    // markLine: {
    //     data: [
    //         { type: 'average', name: 'Avg' },
    //         [
    //             {
    //                 symbol: 'none',
    //                 x: '90%',
    //                 yAxis: 'max'
    //             },
    //             {
    //                 symbol: 'circle',
    //                 label: {
    //                     position: 'start',
    //                     formatter: 'Max'
    //                 },
    //                 type: 'max',
    //                 name: '最高点'
    //             }
    //         ]
    //     ]
    // }
    // },
    //     {
    //         name: '选择设备时显示该折线',
    //         type: 'line',
    //         data: yAxisData2.map((item) => item + 8),
    //         markPoint: {
    //             data: [{ name: '周最低', value: 10, xAxis: 1, yAxis: -1.5 }]
    //         },
    //         markLine: {
    //             data: [
    //                 { type: 'average', name: 'Avg' },
    //                 [
    //                     {
    //                         symbol: 'none',
    //                         x: '90%',
    //                         yAxis: 'max'
    //                     },
    //                     {
    //                         symbol: 'circle',
    //                         label: {
    //                             position: 'start',
    //                             formatter: 'Max'
    //                         },
    //                         type: 'max',
    //                         name: '最高点'
    //                     }
    //                 ]
    //             ]
    //         }
    //     },
    //     {
    //         name: '选择设备2时显示该折线',
    //         type: 'line',
    //         data: yAxisData3.map((item) => item - 15),
    //         markPoint: {
    //             data: [{ name: '周最低', value: 10, xAxis: 1, yAxis: -1.5 }]
    //         }
    //         // markLine: {
    //         //     data: [
    //         //         { type: 'average', name: 'Avg' },
    //         //         [
    //         //             {
    //         //                 symbol: 'none',
    //         //                 x: '90%',
    //         //                 yAxis: 'max'
    //         //             },
    //         //             {
    //         //                 symbol: 'circle',
    //         //                 label: {
    //         //                     position: 'start',
    //         //                     formatter: 'Max'
    //         //                 },
    //         //                 type: 'max',
    //         //                 name: '最高点'
    //         //             }
    //         //         ]
    //         //     ]
    //         // }
    //     }
    // ]
};
