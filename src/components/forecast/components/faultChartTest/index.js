//
import React, { useEffect, useRef } from "react"
import * as EChart from 'echarts'
import { option } from './config'
function FaultChartTest({height}) {
    const containerRef1 = useRef(null)
    useEffect(() => {
        const curCharts1 = EChart.init(containerRef1.current)
        curCharts1.setOption(option);
        console.log(option)
    }, [])

    return <div>
                {/*<h2 className="z-chart-title">预警曲线</h2>*/}
                <div style={{height }} ref={containerRef1}>
                </div>
            </div>

}

export default FaultChartTest