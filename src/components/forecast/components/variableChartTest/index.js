import React, { useEffect, useRef } from "react"
import * as EChart from 'echarts'
import { option } from './config'
import ecStat from 'echarts-stat';
import { theme } from '@/phm/components/conf/theme'
function VariableChartTest({}) {
    const containerRef1 = useRef(null)
    useEffect(() => {
        EChart.registerTheme('walden', theme);
        EChart.registerTransform(ecStat.transform.regression);
        const curCharts1 = EChart.init(containerRef1.current, 'walden')
        curCharts1.setOption(option);
    }, [])

    return <div className="panel" style={{height: 555}}>
        <div className="z-chart-container inner">
            <h2 className="z-chart-title">相关变量</h2>
            <div style={{height: 530 }} ref={containerRef1}>
            </div>
        </div>
    </div>

}

export default VariableChartTest