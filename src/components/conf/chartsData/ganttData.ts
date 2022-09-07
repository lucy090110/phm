import * as echarts from 'echarts';
import { getFullDate } from '@/phm/framework/utils';

const colors = ['#04d5fc', '#03fc80', '#e6a900', '#e00005'];
const state = ['健康', '亚健康', '异常', '故障']; // 三种状态

// echart配置
const option = {
    color: colors,
    backgroundColor: 'transparent',
    tooltip: {
        // 提示框
        formatter: function (params:any) {
            return params.name + ':' + params.value[1] + '~' + params.value[2];
        } // 数据的值
    },
    grid: {
        // 绘图网格
        left: '1%',
        right: '1%',
        top: '3%',
        bottom: '50px',
        containLabel: true
    },
    xAxis: {
        type: 'time',
        min: '2021/1/1', // 将data里最小时间的整点时间设为min,否则min会以data里面的min为开始进行整点递增
        axisLabel: {
            formatter: function (value:any) {
                const date = new Date(value);
                return getFullDate(date, true);
            }
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: true
        }
    },
    yAxis: {
        data: ['故障', '异常', '亚健康', '健康']
    },
    series: [
        // 用空bar来显示三个图例
        { name: state[0], type: 'bar', data: [] },
        { name: state[1], type: 'bar', data: [] },
        { name: state[2], type: 'bar', data: [] },
        { name: state[3], type: 'bar', data: [] },
        {
            type: 'custom',
            renderItem: function (params:any, api:any) {
                // 开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
                const categoryIndex = api.value(0); // 这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
                const start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
                const end = api.coord([api.value(2), categoryIndex]);
                const height = api.size([0, 1])[1];

                return {
                    type: 'rect', // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                    shape: echarts.graphic.clipRectByRect(
                        {
                            // 矩形的位置和大小。
                            x: start[0],
                            y: start[1] - height / 2,
                            width: end[0] - start[0],
                            height: height
                        },
                        {
                            // 当前坐标系的包围盒。
                            x: params.coordSys.x,
                            y: params.coordSys.y,
                            width: params.coordSys.width,
                            height: params.coordSys.height
                        }
                    ),
                    style: api.style()
                };
            },
            encode: {
                x: [1, 2], // data 中『维度1』和『维度2』对应到 X 轴
                y: 0 // data 中『维度0』对应到 Y 轴
            },
            data: [
                {
                    itemStyle: { normal: { color: colors[0] } }, // 条形颜色
                    name: '健康',
                    value: [3, '2021/3/2', '2021/7/1'] // 0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                },
                {
                    itemStyle: { normal: { color: colors[0] } },
                    name: '健康',
                    value: [3, '2021/7/26', '2021/8/10']
                },
                {
                    itemStyle: { normal: { color: colors[0] } },
                    name: '健康',
                    value: [3, '2021/8/29', '2021/9/10']
                },
                {
                    itemStyle: { normal: { color: colors[0] } },
                    name: '健康',
                    value: [3, '2021/9/19', '2021/11/1']
                },
                {
                    itemStyle: { normal: { color: colors[0] } },
                    name: '健康',
                    value: [3, '2022/1/4', '2022/3/10']
                },
                {
                    itemStyle: { normal: { color: colors[1] } },
                    name: '亚健康',
                    value: [2, '2021/12/1', '2022/1/3']
                },
                {
                    itemStyle: { normal: { color: colors[1] } },
                    name: '亚健康',
                    value: [2, '2021/2/1', '2021/3/1']
                },
                {
                    itemStyle: { normal: { color: colors[1] } },
                    name: '亚健康',
                    value: [2, '2022/4/1', '2022/4/28']
                },
                {
                    itemStyle: { normal: { color: colors[2] } },
                    name: '异常',
                    value: [1, '2022/3/11', '2022/3/28']
                },
                {
                    itemStyle: { normal: { color: colors[2] } },
                    name: '异常',
                    value: [1, '2022/5/2', '2022/5/25']
                },
                {
                    itemStyle: { normal: { color: colors[3] } },
                    name: '故障',
                    value: [0, '2021/9/11', '2021/9/18']
                },
                {
                    itemStyle: { normal: { color: colors[3] } },
                    name: '故障',
                    value: [0, '2021/7/2', '2021/7/25']
                },
                {
                    itemStyle: { normal: { color: colors[3] } },
                    name: '故障',
                    value: [0, '2021/8/11', '2021/8/28']
                },
                {
                    itemStyle: { normal: { color: colors[3] } },
                    name: '故障',
                    value: [0, '2021/11/2', '2021/11/25']
                }
            ]
        }
    ],
    dataZoom: [
        {
            type: 'slider', // slider表示有滑动块的，
            show: true,
            xAxisIndex: [0], // 表示x轴折叠
            start: 0, // 数据窗口范围的起始百分比,表示1%
            end: 100, // 数据窗口范围的结束百分比,表示35%坐标
            height: 15
        }
    ]
};
export const ganttData = { option };
