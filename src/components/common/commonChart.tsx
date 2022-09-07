import React, { useRef, MutableRefObject, useEffect } from 'react';
import * as echarts from 'echarts';

let myChart: any = null;
const CommonChart: React.FC<any> = (props) => {
    const containerRef: MutableRefObject<any> = useRef(null);
    const { option, clickFunc, filterBarChild } = props;
    const renderChart = () => {
        const chartDom: any = containerRef.current;
        myChart = echarts.init(chartDom, 'dark');
        myChart.setOption(option);
        if (clickFunc) {
            myChart.on('click', (params:any) => {
                clickFunc(params);
            });
        }
        window.addEventListener('resize', myChart.resize);
    };

    useEffect(() => {
        renderChart();
        return () => {
            window.removeEventListener('resize', myChart);
        };
    });

    const height = props?.height ? props.height : '13rem';
    return (
        <div>
            {filterBarChild && <div className={'filter-box'}>{filterBarChild}</div>}
            <div ref={containerRef} className={'common-chart-main'} style={{ height: height }} />
        </div>
    );
};

export default CommonChart;
