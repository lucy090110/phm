import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';
import './monitor-card.less';

const textColor = '#fff';

const list: any[] = [{ name: '变量名称', value: 'XXXXX' }];

const MonitorCard = ({ title, data, index }:any) => {
    const option = {
        grid: {
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['0:00', '4:00', '8:00', '16:00', '20:00', '24:00'],
            axisLine: {
                lineStyle: {
                    color: textColor
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 1,
            axisLine: {
                lineStyle: {
                    color: textColor
                }
            },
            splitLine: {
                lineStyle: {
                    color: textColor
                }
            }
        },
        series: [
            {
                data,
                type: 'line',
                itemStyle: {
                    color: '#fcca03'
                }
            }
        ]
    };
    useEffect(() => {
        const chartDom:any = document.getElementById(`graph${index}`);
        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
    }, []);

    return (
        <div className="panel monitor-card-border">
            <div className="monitor-card-wrapper inner">
                <div id={`graph${index}`} style={{ width: '100%', height: 320 }} />

                {list?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                left: '10px',
                                right: '10px',
                                bottom: '50px',
                                padding: '0 20px'
                            }}
                        >
                            <div>变量名称：</div>

                            <div>{title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

MonitorCard.propTypes = {
    index: PropTypes.number.isRequired
};

export default MonitorCard;
