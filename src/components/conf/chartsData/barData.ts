import { getBeforeDate } from '@/phm/components/utils/index';
const colors = ['#04d5fc', '#03fc80', '#e6a900', '#e00005'];
const getDate = () => {
    const dateArr = [];
    for (let i = 1; i < 8; i++) {
        dateArr.push(getBeforeDate(i));
    }
    return dateArr;
};
const option = {
    backgroundColor: 'transparent',
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        // 绘图网格
        left: '-30px',
        right: '0',
        top: '3%',
        bottom: '20%',
        containLabel: true
    },
    dataZoom: [
        {
            type: 'slider', // slider表示有滑动块的，
            show: true,
            xAxisIndex: [0], // 表示x轴折叠
            start: 0, // 数据窗口范围的起始百分比,表示1%
            end: 100, // 数据窗口范围的结束百分比,表示35%坐标
            height: 15
        }
    ],
    legend: {
        left: 'center',
        top: 'top'
    },
    xAxis: [
        {
            type: 'category',
            data: getDate()
        }
    ],
    yAxis: {
        show: false
    },
    series: [
        {
            name: '健康',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '亚健康',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '异常',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '故障',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        }
    ]
};
export const barData = { option };
