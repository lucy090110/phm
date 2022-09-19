import { xAxisData } from '../../common/config';
const splitLineStyle = {
    show: true,
    lineStyle: {
        color: '#555'
    }
};
export const option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt:any) {
            return [pt[0], '10%'];
        }
    },
    // legend: {
    //     data: ['预测值', '实际值'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#fff'
        },
        data: ['信号1', '信号2', '信号3', '信号4', '信号5', '信号6', '信号7']
        // data: xAxisData
    },
    yAxis: {
        type: 'value',
        name: '频次',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff'
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: splitLineStyle
    },
    grid: {
        top: '30px'
    },
    series: {
        data: [120, 200, 150, 80, 70, 110, 130],
        // name: '实际值',
        type: 'bar'
    }
};
