export const option = {
    title: {
        text: '',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['实际值', '预测值'],
        top: 20,
        right: 0,
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#fff'
        },
        data: []
    },
    yAxis: {
        type: 'value',
        nameTextStyle: {
            color: '#fff'
        },
        axisLabel: {
            color: '#fff'
        }
    },
    series: [
        {
            name: '实际值',
            type: 'line',
            stack: 'Total',
            data: []
        },
        {
            name: '预测值',
            type: 'line',
            stack: 'Total',
            data: []
        }
    ]
};
