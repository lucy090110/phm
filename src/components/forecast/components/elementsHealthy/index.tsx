import React, { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
import { option } from './config';
import ecStat from 'echarts-stat';
import { theme } from '@/phm/components/conf/theme';
function DegenerationChart() {
    const containerRef:any = useRef(null);

    useEffect(() => {
        EChart.registerTheme('walden', theme);
        // @ts-ignore
        EChart.registerTransform(ecStat.transform.regression);
        const curCharts = EChart.init(containerRef.current, 'walden');
        curCharts.setOption(option);
    }, []);

    return (
        <div className="z-chart-wrapper panel" style={{ height: 438 }}>
            <div className="z-chart-container inner">
                <h2 className="z-chart-title">关联设备健康度</h2>
                <div style={{ height: 400 }} ref={containerRef} />
            </div>
        </div>
    );
}

export default DegenerationChart;
