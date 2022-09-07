import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
const PieComponent: React.FC<any> = (props) => {
    const domRef:any = useRef(null);
    const renderChart = () => {
        const myChart = echarts.init(domRef.current, 'dark');
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
                top: 'top'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 900, name: '健康' },
                        { value: 300, name: '亚健康' },
                        { value: 300, name: '异常' },
                        { value: 300, name: '故障' }
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

        option && myChart.setOption(option);
        myChart.on('click', (params) => {
            props.selectChange(params.name);
        });
    };
    useEffect(() => {
        renderChart();
    });
    const aClick = () => {
        props.barClick();
    };
    return (
        <div>
            <span onClick={aClick} className={'back-link'}>{`<< 返回`}</span>
            <div ref={domRef} className={'pie-main'}>
                {' '}
            </div>
        </div>
    );
};
export default PieComponent;
