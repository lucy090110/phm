//
import React, { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
function MonitorChart({ realData, predictData, height, title }:any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const containerRef1 = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // @ts-ignore
        const curCharts1 = EChart.init(containerRef1.current);
        const option = {
            title: {
                text: title,
                textStyle: {
                    color: '#fff'
                }
            },
            legend: {
                data: ['预测值', '实际值'],
                textStyle: {
                    color: '#fff'
                },
                left: 'right',
                selectedMode: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params:any) {
                    const [data1, data2] = params;
                    return `
                        <span style="width: 8px; height: 8px; display: inline-block; border-radius: 8px; background-color: ${
                            data1?.color
                        }"></span>
                        ${data1?.seriesName}: ${data1?.data} <br />

                        <span style="width: 8px; height: 8px; display: inline-block; border-radius: 8px; background-color: ${
                            data2?.color
                        }"></span>
                        ${data2?.seriesName}: ${data2?.data} <br />

                        <span style="width: 8px; height: 8px; display: inline-block; border-radius: 8px; background-color: orange"></span>
                        偏差: ${Math.abs(data2?.data - data1?.data).toFixed(2)} <br />
                    `;
                }
            },
            grid: {
                bottom: 90
            },
            dataZoom: [
                {
                    type: 'inside'
                },
                {
                    type: 'slider'
                }
            ],
            xAxis: {
                data: realData.map((item:any) => item.ts),
                silent: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                },
                splitArea: {
                    show: false
                }
            },
            yAxis: {
                splitArea: {
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                },
                splitLine: {
                    lineStyle: {
                        color: '#555'
                    }
                }
            },
            series: [
                {
                    type: 'line',
                    data: realData.map((item:any) => item.val.toFixed(2)),
                    name: '实际值',
                    large: true,
                    color: '#5470c6'
                },
                {
                    type: 'line',
                    data: predictData.map((item:any) => item.val.toFixed(2)),
                    name: '预测值',
                    large: true,
                    color: '#91cc75'
                }
            ]
        };
        curCharts1.setOption(option);
    }, [predictData, realData, title]);

    return (
        <div>
            <div style={{ height: 300 }} ref={containerRef1} />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: -10 }}>时间（*10s）</p>
        </div>
    );
}

export default MonitorChart;
