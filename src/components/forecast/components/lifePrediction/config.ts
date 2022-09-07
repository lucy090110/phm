const data1 = [425, 400, 375, 350, 325, 300, 275, 250, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0];
const data2 = [
    (16000 / 1000) * 14.8,
    (16000 / 1000) * 14.6,
    (16000 / 1000) * 14.5,
    (16000 / 1000) * 14.5,
    (16000 / 1000) * 14.4,
    (16000 / 1000) * 14.3,
    (16000 / 1000) * 14.2,
    (16000 / 1000) * 14,
    (16000 / 1000) * 14,
    (10202 / 1000) * 14,
    (10202 / 1000) * 14,
    (11962.5 / 1000) * 14,
    (10202.2 / 1000) * 14,
    (8964.4 / 1000) * 14,
    (7171 / 1000) * 14,
    (5934.5 / 1000) * 14,
    (5294.7 / 1000) * 14,
    (4862.4 / 1000) * 14
];
export const option = {
    animationDuration: 10000,
    // dataset: [
    //   {
    //     source: [
    //       [1, 16000 / 1000 * 4],
    //       [2, 16000 / 1000 * 4],
    //       [3, 16000 / 1000 * 4],
    //       [4, 16000 / 1000 * 4],
    //       [5, 16000 / 1000 * 4],
    //       [6, 16000 / 1000 * 4],
    //       [7, 16000 / 1000 * 4],
    //       [8, 16000 / 1000 * 4],
    //       [9, 16000 / 1000 * 4],
    //       [10, 10202 / 1000 * 4],
    //       [11, 10202 / 1000 * 4],
    //       [12, 11962.5 / 1000 * 4],
    //       [13, 10202.2 / 1000 * 4],
    //       [14, 8964.4 / 1000 * 4],
    //       [15, 7171 / 1000 * 4],
    //       [16, 5934.5 / 1000 * 4],
    //       [17, 5294.7 / 1000 * 4],
    //       [18, 4862.4 / 1000 * 4],
    //   ]
    //   },
    //   {
    //     transform: {
    //       type: 'ecStat:regression',
    //       config: {
    //        // method: 'exponential'
    //         // 'end' by default
    //         // formulaOn: 'start'
    //       }
    //     }
    //   }
    // ],
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
                type: 'dashed'
            }
        },
        axisLabel: {
            color: '#fff'
        },
        data: [
            1300, 1325, 1350, 1400, 1425, 1450, 1500, 1525, 1550, 1600, 1625, 1650, 1700, 1725,
            1750, 1800, 1825, 1850
        ]
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
        },
        min: -50
    },
    grid: {
        left: 30,
        top: 10,
        bottom: 40
    },
    series: [
        {
            name: 'scatter',
            type: 'line',
            datasetIndex: 0,
            data: data2
        },
        {
            name: 'line',
            type: 'line',
            smooth: true,
            datasetIndex: 1,
            symbolSize: 0.1,
            symbol: 'circle',
            // label: { show: true, fontSize: 16 },
            labelLayout: { dx: -20 },
            encode: { label: 2, tooltip: 1 },
            data: data1
        }
    ]
};
