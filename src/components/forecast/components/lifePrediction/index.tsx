//
import React, { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
import { option } from './config';
function VariableChart({ height }:any) {
    const containerRef1:any = useRef(null);
    useEffect(() => {
        const curCharts1 = EChart.init(containerRef1.current);
        curCharts1.setOption(option);
    }, []);

    return (
        <div>
            <h2 className="z-chart-title">剩余寿命预测</h2>
            <div style={{ height }} ref={containerRef1} />
        </div>
    );
}

export default VariableChart;
