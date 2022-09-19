//
import React, { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
import { option } from './config';
function VariableChart({ height, data }:any) {
    const containerRef1:any = useRef(null);
    useEffect(() => {

        const curCharts1 = EChart.init(containerRef1.current);
        curCharts1.setOption(option);
        // if (!data?.length) return;
        // const curCharts1 = EChart.init(containerRef1.current);
        // curCharts1.setOption({
        //     ...option,
        //     xAxis: {
        //         ...option.xAxis,
        //         data: data.map((item:any) => item.meterName)
        //     },
        //     series: {
        //         ...option.series,
        //         data: data.map((item:any) => item.value)
        //     }
        // });
    }, [data]);
    return (
        <div>
            <h2 className="z-chart-title">相关信号统计值</h2>
            {/*{data?.length ? (*/}
            {/*    <div style={{ height }} ref={containerRef1} />*/}
            {/*) : (*/}
            {/*    <div style={{ height }} className="flex-horizontal">*/}
            {/*        暂无数据*/}
            {/*    </div>*/}
            {/*)}*/}
            <div style={{ height }} ref={containerRef1} />
        </div>
    );
}

export default VariableChart;
