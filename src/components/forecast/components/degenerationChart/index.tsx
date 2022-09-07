//
import React, { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
import { option } from './config';
import ecStat from 'echarts-stat';
function VariableChart({ height}:any) {
    const containerRef1:any = useRef(null);
    useEffect(() => {
        // @ts-ignore
        EChart.registerTransform(ecStat.transform.regression);
        const curCharts1 = EChart.init(containerRef1.current);
        curCharts1.setOption(option);
    }, []);

    return (
        <div>
            <h2 className="z-chart-title">退化因子</h2>
            <div style={{ height }} ref={containerRef1} />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: -10 }}>时间（*10s）</p>
        </div>
    );
}

export default VariableChart;
