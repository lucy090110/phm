import { xAxisData2, yAxisData } from '../../common/config';
const splitLineStyle = {
    show: true,
    lineStyle: {
        color: '#555'
    }
};
const data = [
    ['2000-06-05', 100],
    ['2000-06-06', 100],
    ['2000-06-07', 100],
    ['2000-06-08', 97],
    ['2000-06-09', 96],
    ['2000-06-10', 95],
    ['2000-06-11', 93],
    ['2000-06-12', 88],
    ['2000-06-13', 92],
    ['2000-06-14', 83],
    ['2000-06-15', 82],
    ['2000-06-16', 81],
    ['2000-06-17', 80],
    ['2000-06-18', 79],
    ['2000-06-19', 78],
    ['2000-06-20', 76],
    ['2000-06-21', 76],
    ['2000-06-22', 76],
    ['2000-06-23', 75],
    ['2000-06-24', 74],
    ['2000-06-25', 71],
    ['2000-06-26', 66],
    ['2000-06-27', 64],
    ['2000-06-28', 63],
    ['2000-06-29', 65],
    ['2000-06-30', 63],
    ['2000-07-01', 63],
    ['2000-07-02', 62],
    ['2000-07-03', 60],
    ['2000-07-04', 52],
    ['2000-07-05', 44],
    ['2000-07-06', 42],
    ['2000-07-07', 46],
    ['2000-07-08', 47],
    ['2000-07-09', 46],
    ['2000-07-10', 41],
    ['2000-07-11', 42],
    ['2000-07-12', 43],
    ['2000-07-13', 37],
    ['2000-07-14', 33],
    ['2000-07-15', 31],
    ['2000-07-16', 34],
    ['2000-07-17', 29],
    ['2000-07-18', 28],
    ['2000-07-19', 27],
    ['2000-07-20', 23],
    ['2000-07-21', 21],
    ['2000-07-22', 17],
    ['2000-07-23', 15],
    ['2000-07-24', 10]
];
const dateList = data.map(function (item) {
    return item[0];
});
const valueList = data.map(function (item:any) {
    return item[1] / 25;
});

export const option = {
    // Make gradient line here
    visualMap: [
        {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        },
        {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
        }
    ],
    title: [
        {
            left: 'center',
            text: '高压马达',
            top: -6
        },
        {
            top: '40%',
            left: 'center',
            text: '齿轮箱'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [
        {
            data: xAxisData2
        },
        {
            data: xAxisData2,
            gridIndex: 1
        }
    ],
    yAxis: [
        {
            min: 0,
            max: 100,
            splitLine: splitLineStyle
        },
        {
            gridIndex: 1,
            min: 0,
            max: 100,
            splitLine: splitLineStyle
        }
    ],
    grid: [
        {
            top: 20,
            bottom: '68%'
        },
        {
            top: '50%'
        }
    ],
    series: [
        {
            type: 'line',
            name: '高压马达健康度',
            showSymbol: false,
            data: yAxisData
        },
        {
            type: 'line',
            name: '齿轮箱健康度',
            showSymbol: false,
            data: yAxisData,
            xAxisIndex: 1,
            yAxisIndex: 1
        }
    ]
};
