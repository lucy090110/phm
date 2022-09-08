import { xAxisData2 } from '../../common/config';
const splitLineStyle = {
    show: true,
    lineStyle: {
        color: '#555'
    }
};
const data:any[] = [];
for (let i = 1; i < 24; i++) {
    const num:any=Math.random() / 10 + (24 - i) * 0.03;
    data.push(num.toFixed(2) * 100);
}
export const option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt:any) {
            return [pt[0], '10%'];
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#fff'
        },
        data: xAxisData2
    },
    yAxis: {
        type: 'value',
        name: '距离下次故障时间/h',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff'
        },
        boundaryGap: ['10%', '10%'],
        axisLabel: {
            color: '#fff'
        },
        splitLine: splitLineStyle
    },
    grid: {
        top: 30
    },
    series: {
        name: '距离下次故障时间',
        type: 'line',
        symbol: 'none',
        data: data
    }
};
