//
import React, { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
import moment from 'moment';

function MonitorChart({ realData, predictData, height, title }:any) {
    const containerRef1:any = useRef(null);
    useEffect(() => {
        const curCharts1 = EChart.init(containerRef1.current);
        const dataCount = 5e2;
        const data = generateData(dataCount);
        const data2 = generateData(dataCount);
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
                data: realData.map((item:any) => moment(item.ts).format('YYYY年MM月DD日 HH时mm分')),
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
                    // Set `large` for large data amount
                    name: '实际值',
                    large: true,
                    color: '#5470c6'
                },
                {
                    type: 'line',
                    data: predictData.map((item:any) => item.val.toFixed(2)),
                    name: '预测值',
                    // Set `large` for large data amount
                    large: true,
                    color: '#91cc75'
                }
            ]
        };
        function generateData(count:any) {
            let baseValue = Math.random() * 1000;
            let time = +new Date(2011, 0, 1);
            let smallBaseValue:any;
            function next(idx:any) {
                smallBaseValue =
                    idx % 30 === 0
                        ? Math.random() * 700
                        : smallBaseValue + Math.random() * 500 - 250;
                baseValue += Math.random() * 20 - 10;
                return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
            }
            const categoryData = [];
            const valueData = [];
            for (let i = 0; i < count; i++) {
                categoryData.push(EChart.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time, false));
                valueData.push(next(i).toFixed(2));
                time += 1000;
            }
            return {
                categoryData: categoryData,
                valueData: valueData
            };
        }
        curCharts1.setOption(option);
    }, [predictData, realData, title]);

    return (
        <div>
            <div style={{ height: 500 }} ref={containerRef1} />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: -10 }}>时间（*10s）</p>
        </div>
    );
}

export default MonitorChart;
