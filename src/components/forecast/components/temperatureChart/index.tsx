import React, { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
import { option } from './config';
import moment from 'moment';
interface faultPredictionProps {
    height: number;
    data: any[];
}
function FaultPredictionChart({ height, data }: faultPredictionProps) {
    const echartContainerRef:any = useRef(null);
    useEffect(() => {
        if (!data?.length) return;
        const curCharts = EChart.init(echartContainerRef.current);
        curCharts.setOption({
            ...option,
            xAxis: {
                ...option.xAxis,
                data: data.map((item) => moment(item.ts).format('YYYY-MM-DD HH:ss'))
            },
            series: {
                ...option.series,
                data: data.map((item) => item?.val?.toFixed(2))
            }
        });
    }, [data]);
    return (
        <div>
            <h2 className="z-chart-title">预警曲线</h2>
            {data?.length ? (
                <div style={{ height }} ref={echartContainerRef} />
            ) : (
                <div style={{ height }} className="flex-horizontal">
                    暂无数据
                </div>
            )}
        </div>
    );
}
export default FaultPredictionChart;
