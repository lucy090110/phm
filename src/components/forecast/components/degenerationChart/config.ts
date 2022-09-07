export const option = {
    animationDuration: 10000,
    dataset: [
        {
            source: [
                [1, 0.4862],
                [2, 0.57294],
                [3, 0.55934],
                [4, 0.70171],
                [5, 0.84964],
                [6, 1.02202],
                [7, 1.15962],
                [8, 1.43928],
                [9, 1.62909],
                [10, 1.89547],
                [11, 2.18617],
                [12, 2.61638],
                [13, 3.44634],
                [14, 4.64759],
                [15, 5.81478],
                [16, 6.76884],
                [17, 7.46462],
                [18, 7.97395]
            ]
        },
        {
            transform: {
                type: 'ecStat:regression',
                config: {
                    method: 'exponential'
                    // 'end' by default
                    // formulaOn: 'start'
                }
            }
        }
    ],
    // title: {
    //   text: '1981 - 1998 gross domestic product GDP (trillion yuan)',
    //   subtext: 'By ecStat.regression',
    //   sublink: 'https://github.com/ecomfe/echarts-stat',
    //   left: 'center'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#555'
            }
        },
        axisLabel: {
            rotate: 30,
            color: '#fff',
            formatter: function (val:any, index:number) {
                const timestampStart = new Date('2021-06-23 14:00').getTime();
                const curTimestamp = timestampStart + val * 10 * 60 * 1000;
                const curDate = new Date(curTimestamp);
                const hour = curDate.getHours();
                let mins:any = curDate.getMinutes();
                if (mins.toString().length === 1) {
                    mins = '0' + mins;
                }
                // return hour + ':' + mins
                return val * 10 * 60;
            }
        }
    },
    grid: {
        top: 10,
        bottom: 40
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#555'
            }
        },
        axisLabel: {
            color: '#fff'
        }
    },
    series: [
        {
            name: '退化因子',
            type: 'scatter',
            datasetIndex: 0
        },
        {
            name: '退化速率',
            type: 'line',
            smooth: true,
            datasetIndex: 1,
            symbolSize: 0.1,
            symbol: 'circle',
            // label: { show: true, fontSize: 16 },
            labelLayout: { dx: -20 },
            encode: { label: 2, tooltip: 1 }
        }
    ]
};
