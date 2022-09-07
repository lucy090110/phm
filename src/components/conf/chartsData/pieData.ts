const colors = ['#04d5fc', '#03fc80', '#e6a900', '#e00005'];
const option = {
    backgroundColor: 'transparent',
    color: colors,
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        top: 'bottom'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 900, name: 'A' },
                { value: 300, name: 'B' },
                { value: 300, name: 'C' },
                { value: 300, name: 'D' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
export const pieData = { option };
