import * as echarts from 'echarts';

const colors = ['#e00005', '#e6a900', '#03fc80', '#04d5fc'];
const fontColor = '#0089fa';
const option = {
    backgroundColor:'transparent',
    series: [
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '100%',
            pointer: {
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [-30, '90%'],
                fontSize: 15,
                color: '#fff'
            },
            title: {
                show: true,
                offsetCenter: [-60, '90%'],
                textStyle: {
                    color: fontColor
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#02e0f5']],
                    width: 3,
                    opacity: 0.7
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid'
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '90%',
            min: 0,
            max: 100,
            center: ['50%', '50%'],
            splitNumber: 5,
            axisLine: {
                lineStyle: {
                    width: 15,
                    color: [
                        [0, colors[0]],
                        [
                            0.25,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0.5,
                                    color: colors[0]
                                },
                                {
                                    offset: 0.8,
                                    color: colors[1]
                                }
                            ])
                        ],
                        [0.5, colors[1]],
                        [
                            0.75,
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colors[1]
                                },
                                {
                                    offset: 1,
                                    color: colors[2]
                                }
                            ])
                        ],
                        [
                            0.9,
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colors[2]
                                },
                                {
                                    offset: 0.8,
                                    color: colors[3]
                                }
                            ])
                        ],
                        [1, colors[3]]
                    ]
                }
            },
            splitLine: {
                length: 12,
                lineStyle: {
                    width: 2,
                    color: '#ffffff'
                }
            },
            axisLabel: {
                color: '#fff',
                distance: 20,
                fontSize: 12
            },
            detail: {
                show: true,
                offsetCenter: ['0', '50%'],
                color: '#fff',
                valueAnimation: true,
                formatter: '{value}',
                fontSize: 30
            },
            itemStyle: {
                normal: {
                    color: 'rgb(252,252,252)'
                }
            },
            data: [
                {
                    value: '84',
                    name: '健康度评分',
                    detail: {
                        formatter: '84',
                        fontSize: 40,
                        color: '#fff'
                    }
                }
            ],
            silent: false,

            pointer: {
                itemStyle: {
                    color: 'auto'
                },
                offsetCenter: ['0', '0'],
                width: 3,
                length: '40%'
            },
            axisTick: {
                length: 8,
                lineStyle: {
                    color: '#b3b3b4',
                    width: 1
                }
            }
        }
    ]
};
export const gaugeData = { option };
